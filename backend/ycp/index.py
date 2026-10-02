"""Интеграция с Яндекс Товарами (YCP): кнопка «Купить в 1 клик». Склад, проверка корзины, сессия чекаута, заказ, отмены"""
import json
import os
import time
import hmac
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

HEADERS = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
from catalog import CATALOG

WAREHOUSE_ID = '1'
WAREHOUSE = {
    'id': WAREHOUSE_ID,
    'title': 'Склад СтальПроКлапан',
    'address': 'Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171',
    'phone': '+7 960 937-35-42',
    'description': 'Основной склад',
    'self_pickup_options': {'enabled': False},
}
STOCK_QUANTITY = 1000
NOTIFY_EMAIL = 'sadoxa1996@mail.ru'


def resp(status, body=None):
    return {'statusCode': status, 'headers': HEADERS, 'body': json.dumps(body if body is not None else {}, ensure_ascii=False, default=str)}


def err(status, message):
    return resp(status, {'error': message})


def get_db():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def is_authorized(event):
    headers = {k.lower(): v for k, v in (event.get('headers') or {}).items()}
    value = headers.get('x-authorization') or headers.get('authorization') or ''
    token = value[7:] if value.lower().startswith('bearer ') else value
    expected = os.environ.get('YCP_SITE_TOKEN', '')
    return bool(expected) and hmac.compare_digest(token.strip(), expected.strip())


def parse_body(event):
    raw = event.get('body') or '{}'
    try:
        return json.loads(raw)
    except ValueError:
        return None


def route_of(event):
    path = (event.get('path') or '/').split('?')[0].rstrip('/')
    override = (event.get('queryStringParameters') or {}).get('route')
    if override:
        path = '/' + override.strip('/')
    for suffix in ('/checkout/basket/check', '/checkout/delivery/pickup_points', '/checkout/delivery/options',
                   '/checkout/placed', '/checkout/cancel', '/order/delivered', '/order/cancel',
                   '/warehouses', '/checkout', '/order'):
        if path.endswith(suffix):
            return suffix
    return ''


def product_payload(pid):
    p = CATALOG[pid]
    return {
        'id': pid,
        'name': p['name'],
        'regular_price': p['price'],
        'final_price': p['price'],
        'img': p['image'],
        'url': p['url'],
        'warehouses': [{'id': WAREHOUSE_ID, 'available_quantity': STOCK_QUANTITY}],
        'dimensions': {},
        'characteristics': [],
        'variations': [],
    }


def handle_warehouses(event):
    params = event.get('queryStringParameters') or {}
    offset = int(params.get('offset') or 0)
    limit = int(params.get('limit') or 100)
    items = [WAREHOUSE][offset:offset + limit]
    return resp(200, {'warehouses': items, 'total_count': 1})


def handle_basket_check(body):
    items = body.get('items')
    if not isinstance(items, list) or not items:
        return err(400, 'items is required')
    result = []
    for it in items:
        pid = str(it.get('id', ''))
        if pid not in CATALOG:
            return err(404, 'Товар не найден: %s' % pid)
        result.append(product_payload(pid))
    return resp(200, {'items': result})


def handle_checkout_create(body):
    session_id = str(body.get('session_id', ''))
    items = body.get('items')
    if not session_id or not isinstance(items, list) or not items:
        return err(400, 'session_id and items are required')

    actual = []
    mismatch = False
    total = 0
    for it in items:
        pid = str(it.get('id', ''))
        if pid not in CATALOG:
            return err(400, 'Товар не найден: %s' % pid)
        price = CATALOG[pid]['price']
        actual.append({'id': pid, 'regular_price': price, 'final_price': price,
                       'warehouses': [{'id': WAREHOUSE_ID, 'available_quantity': STOCK_QUANTITY}]})
        if int(it.get('final_price', -1)) != price or int(it.get('quantity', 0)) > STOCK_QUANTITY or int(it.get('quantity', 0)) < 1:
            mismatch = True
        total += price * int(it.get('quantity', 0))
    if mismatch:
        return resp(409, {'error': 'Цены или остатки изменились', 'actual_inventory': {'items': actual}, 'checkout_canceled': False})

    delivery = body.get('delivery') or {}
    delivery_price = float(delivery.get('price') or 0)
    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute('SELECT id FROM ycp_checkouts WHERE session_id = %s', (session_id,))
        if cur.fetchone():
            cur.execute("UPDATE ycp_checkouts SET items_json=%s, total_price=%s, delivery_price=%s, customer_json=%s, delivery_json=%s, warehouse_id=%s, status='reserved', updated_at=NOW() WHERE session_id=%s",
                        (json.dumps(items, ensure_ascii=False), total, delivery_price, json.dumps(body.get('customer') or {}, ensure_ascii=False),
                         json.dumps(delivery, ensure_ascii=False), str(body.get('warehouse_id', '')), session_id))
        else:
            cur.execute("INSERT INTO ycp_checkouts (session_id, items_json, total_price, delivery_price, customer_json, delivery_json, warehouse_id) VALUES (%s,%s,%s,%s,%s,%s,%s)",
                        (session_id, json.dumps(items, ensure_ascii=False), total, delivery_price, json.dumps(body.get('customer') or {}, ensure_ascii=False),
                         json.dumps(delivery, ensure_ascii=False), str(body.get('warehouse_id', ''))))
        conn.commit()
        cur.close()
    finally:
        conn.close()
    return resp(201, {})


def build_email(row, order_id, order_number, payment_method):
    items = json.loads(row['items_json'])
    customer = json.loads(row['customer_json'])
    delivery = json.loads(row['delivery_json'])
    addr = delivery.get('address') or {}
    lines = ['Новый заказ из Яндекс Товаров (кнопка «Купить в 1 клик»)', '',
             'Номер заказа: %s' % (order_number or order_id),
             'Оплата: %s' % ('онлайн, уже оплачен' if payment_method == 'online' else 'по счёту / при получении'), '',
             'Покупатель: %s' % customer.get('full_name', ''),
             'Телефон: %s' % customer.get('phone', ''),
             'Email: %s' % customer.get('email', ''), '',
             'Доставка: %s, %s' % (delivery.get('service_display_name') or delivery.get('service_type', ''), delivery.get('delivery_method', '')),
             'Адрес: %s %s' % (addr.get('locality', ''), addr.get('address', '')),
             'Стоимость доставки: %s' % delivery.get('price', 0), '', 'Товары:']
    for it in items:
        name = CATALOG.get(str(it.get('id')), {}).get('name', it.get('id'))
        lines.append('- %s x %s шт., %s руб.' % (name, it.get('quantity'), it.get('final_price')))
    lines += ['', 'Итого за товары: %s руб.' % row['total_price']]
    return '\n'.join(lines)


def send_mail(subject, text):
    from_email = NOTIFY_EMAIL
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = NOTIFY_EMAIL
    msg.attach(MIMEText(text, 'plain', 'utf-8'))
    with smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=4) as server:
        server.login(from_email, os.environ.get('MAIL_APP_PASSWORD', ''))
        server.sendmail(from_email, NOTIFY_EMAIL, msg.as_string())


def history_with(row, status):
    history = json.loads(row['status_history_json'])
    history.append({'status': status, 'timestamp': int(time.time())})
    return json.dumps(history)


def fetch_row(cur, where, value):
    cur.execute('SELECT session_id, status, items_json, total_price, customer_json, delivery_json, order_id, order_number, delivery_status, status_history_json, created_at FROM ycp_checkouts WHERE %s = %%s' % where, (value,))
    r = cur.fetchone()
    if not r:
        return None
    keys = ['session_id', 'status', 'items_json', 'total_price', 'customer_json', 'delivery_json', 'order_id', 'order_number', 'delivery_status', 'status_history_json', 'created_at']
    return dict(zip(keys, r))


def handle_placed(event, body):
    params = event.get('queryStringParameters') or {}
    session_id = str(body.get('session_id') or params.get('session_id') or '')
    order_id = str(body.get('order_id') or params.get('order_id') or '')
    payment_method = str(body.get('payment_method') or params.get('payment_method') or 'on_delivery')
    order_number = str(body.get('order_number') or '')
    if not session_id or not order_id:
        return err(400, 'session_id and order_id are required')
    conn = get_db()
    try:
        cur = conn.cursor()
        row = fetch_row(cur, 'session_id', session_id)
        if not row:
            return err(404, 'Сессия не найдена')
        if row['status'] == 'placed':
            return resp(200, {})
        if row['status'] == 'cancelled':
            return err(409, 'Сессия уже отменена')
        history = json.loads(row['status_history_json'])
        history.append({'status': 'new', 'timestamp': int(time.time())})
        cur.execute("UPDATE ycp_checkouts SET status='placed', order_id=%s, order_number=%s, payment_method=%s, status_history_json=%s, updated_at=NOW() WHERE session_id=%s",
                    (order_id, order_number, payment_method, json.dumps(history), session_id))
        conn.commit()
        cur.close()
    finally:
        conn.close()
    try:
        send_mail('Новый заказ из Яндекс Товаров № %s' % (order_number or order_id), build_email(row, order_id, order_number, payment_method))
    except Exception as e:
        print('Mail failed: %s' % e)
    return resp(200, {})


def handle_checkout_cancel(event):
    session_id = (event.get('queryStringParameters') or {}).get('session_id', '')
    if not session_id:
        return err(400, 'session_id is required')
    conn = get_db()
    try:
        cur = conn.cursor()
        row = fetch_row(cur, 'session_id', session_id)
        if not row:
            return err(404, 'Сессия не найдена')
        if row['status'] == 'reserved':
            cur.execute("UPDATE ycp_checkouts SET status='cancelled', updated_at=NOW() WHERE session_id=%s", (session_id,))
            conn.commit()
        cur.close()
    finally:
        conn.close()
    return resp(200, {})


def handle_order_cancel(event):
    order_id = (event.get('queryStringParameters') or {}).get('order_id', '')
    if not order_id:
        return err(400, 'order_id is required')
    conn = get_db()
    try:
        cur = conn.cursor()
        row = fetch_row(cur, 'order_id', order_id)
        if not row:
            return err(404, 'Заказ не найден')
        if row['status'] != 'cancelled':
            cur.execute("UPDATE ycp_checkouts SET status='cancelled', delivery_status='cancelled', status_history_json=%s, updated_at=NOW() WHERE order_id=%s",
                        (history_with(row, 'cancelled'), order_id))
            conn.commit()
        cur.close()
    finally:
        conn.close()
    try:
        send_mail('Отмена заказа из Яндекс Товаров № %s' % (row['order_number'] or order_id), 'Покупатель отменил заказ № %s в Яндекс Товарах.' % (row['order_number'] or order_id))
    except Exception as e:
        print('Mail failed: %s' % e)
    return resp(200, {})


def handle_order_delivered(event, body):
    order_id = (event.get('queryStringParameters') or {}).get('order_id', '')
    if not order_id:
        return err(400, 'order_id is required')
    conn = get_db()
    try:
        cur = conn.cursor()
        row = fetch_row(cur, 'order_id', order_id)
        if not row:
            return err(404, 'Заказ не найден')
        if row['status'] == 'cancelled':
            return err(409, 'Заказ отменён')
        cur.execute("UPDATE ycp_checkouts SET status='delivered', delivery_status='delivered', status_history_json=%s, updated_at=NOW() WHERE order_id=%s",
                    (history_with(row, 'delivered'), order_id))
        conn.commit()
        cur.close()
    finally:
        conn.close()
    return resp(200, {})


def handle_order_get(event):
    order_id = (event.get('queryStringParameters') or {}).get('order_id', '')
    if not order_id:
        return err(400, 'order_id is required')
    conn = get_db()
    try:
        cur = conn.cursor()
        row = fetch_row(cur, 'order_id', order_id)
        cur.close()
    finally:
        conn.close()
    if not row:
        return err(400, 'Заказ не найден')
    items = [{'id': str(i.get('id')), 'quantity': int(i.get('quantity', 0)), 'refused_count': 0} for i in json.loads(row['items_json'])]
    statuses = json.loads(row['status_history_json'])
    if not statuses:
        statuses = [{'status': 'new', 'timestamp': int(row['created_at'].timestamp())}]
    return resp(200, {'items': items, 'delivery_statuses': statuses})


def handler(event: dict, context) -> dict:
    """Точка входа YCP: определяет метод по пути запроса и проверяет токен Яндекса"""
    method = event.get('httpMethod', 'GET')
    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**HEADERS, 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Authorization', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    route = route_of(event)
    if not route:
        return resp(200, {'status': 'ok', 'service': 'ycp'})
    if not is_authorized(event):
        return err(401, 'Unauthorized')

    body = {}
    if method == 'POST':
        body = parse_body(event)
        if body is None:
            return err(400, 'Invalid JSON')

    if route == '/warehouses' and method == 'GET':
        return handle_warehouses(event)
    if route == '/checkout/basket/check' and method == 'POST':
        return handle_basket_check(body)
    if route == '/checkout' and method == 'POST':
        return handle_checkout_create(body)
    if route == '/checkout/placed' and method == 'POST':
        return handle_placed(event, body)
    if route == '/checkout/cancel' and method == 'POST':
        return handle_checkout_cancel(event)
    if route == '/order/cancel' and method == 'POST':
        return handle_order_cancel(event)
    if route == '/order/delivered' and method == 'POST':
        return handle_order_delivered(event, body)
    if route == '/order' and method == 'GET':
        return handle_order_get(event)
    if route == '/checkout/delivery/options' and method == 'POST':
        return resp(200, {'delivery_options': []})
    if route == '/checkout/delivery/pickup_points' and method == 'GET':
        return resp(200, {'pickup_points': [], 'total_count': 0})
    return err(400, 'Unknown method')
