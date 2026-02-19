"""API для авторизации, профиля компании и корзины пользователей"""
import json
import os
import hashlib
import secrets
import psycopg2

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Authorization',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
}

def get_db():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def hash_password(password):
    salt = 'stalpro_salt_2024'
    return hashlib.sha256(f'{salt}{password}'.encode()).hexdigest()

def json_response(status, body):
    return {
        'statusCode': status,
        'headers': CORS_HEADERS,
        'body': json.dumps(body, ensure_ascii=False, default=str)
    }

def get_user_by_token(conn, token):
    if not token:
        return None
    cur = conn.cursor()
    cur.execute("SELECT id, email, name, company, phone, address, created_at FROM users WHERE session_token = '%s'" % token.replace("'", "''"))
    row = cur.fetchone()
    cur.close()
    if row:
        return {'id': row[0], 'email': row[1], 'name': row[2], 'company': row[3], 'phone': row[4], 'address': row[5], 'createdAt': row[6]}
    return None

def get_auth_token(event):
    headers = event.get('headers', {})
    auth = headers.get('X-Authorization', headers.get('x-authorization', ''))
    if auth.startswith('Bearer '):
        return auth[7:]
    return auth

def handle_register(event, conn):
    body = json.loads(event.get('body', '{}'))
    email = body.get('email', '').strip().lower()
    password = body.get('password', '')
    name = body.get('name', '')
    company = body.get('company', '')
    phone = body.get('phone', '')
    address = body.get('address', '')

    if not email or not password:
        return json_response(400, {'error': 'Email и пароль обязательны'})

    cur = conn.cursor()
    cur.execute("SELECT id FROM users WHERE email = '%s'" % email.replace("'", "''"))
    if cur.fetchone():
        cur.close()
        return json_response(409, {'error': 'Пользователь с таким email уже существует'})

    token = secrets.token_hex(32)
    pw_hash = hash_password(password)
    cur.execute(
        "INSERT INTO users (email, password_hash, name, company, phone, address, session_token) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s') RETURNING id, email, name, company, phone, address, created_at"
        % (email.replace("'", "''"), pw_hash, name.replace("'", "''"), company.replace("'", "''"), phone.replace("'", "''"), address.replace("'", "''"), token)
    )
    row = cur.fetchone()
    conn.commit()
    cur.close()

    return json_response(200, {
        'token': token,
        'user': {'id': row[0], 'email': row[1], 'name': row[2], 'company': row[3], 'phone': row[4], 'address': row[5], 'createdAt': str(row[6])}
    })

def handle_login(event, conn):
    body = json.loads(event.get('body', '{}'))
    email = body.get('email', '').strip().lower()
    password = body.get('password', '')

    if not email or not password:
        return json_response(400, {'error': 'Email и пароль обязательны'})

    pw_hash = hash_password(password)
    cur = conn.cursor()
    cur.execute(
        "SELECT id, email, name, company, phone, address, created_at FROM users WHERE email = '%s' AND password_hash = '%s'"
        % (email.replace("'", "''"), pw_hash)
    )
    row = cur.fetchone()

    if not row:
        cur.close()
        return json_response(401, {'error': 'Неверный email или пароль'})

    token = secrets.token_hex(32)
    cur.execute("UPDATE users SET session_token = '%s', updated_at = NOW() WHERE id = %d" % (token, row[0]))
    conn.commit()
    cur.close()

    return json_response(200, {
        'token': token,
        'user': {'id': row[0], 'email': row[1], 'name': row[2], 'company': row[3], 'phone': row[4], 'address': row[5], 'createdAt': str(row[6])}
    })

def handle_me(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})
    return json_response(200, {'user': user})

def handle_logout(event, conn):
    token = get_auth_token(event)
    if token:
        cur = conn.cursor()
        cur.execute("UPDATE users SET session_token = NULL WHERE session_token = '%s'" % token.replace("'", "''"))
        conn.commit()
        cur.close()
    return json_response(200, {'ok': True})

def handle_get_profile(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    cur = conn.cursor()
    cur.execute("SELECT name, inn, address, phone, email, delivery_address FROM company_profiles WHERE user_id = %d" % user['id'])
    row = cur.fetchone()
    cur.close()

    if row:
        profile = {'name': row[0], 'inn': row[1], 'address': row[2], 'phone': row[3], 'email': row[4], 'description': row[5]}
    else:
        profile = {'name': user.get('company', ''), 'inn': '', 'address': user.get('address', ''), 'phone': user.get('phone', ''), 'email': user.get('email', ''), 'description': ''}

    return json_response(200, {'profile': profile})

def handle_save_profile(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').replace("'", "''")
    inn = body.get('inn', '').replace("'", "''")
    address = body.get('address', '').replace("'", "''")
    phone = body.get('phone', '').replace("'", "''")
    email = body.get('email', '').replace("'", "''")
    description = body.get('description', '').replace("'", "''")

    cur = conn.cursor()
    cur.execute("SELECT id FROM company_profiles WHERE user_id = %d" % user['id'])
    exists = cur.fetchone()

    if exists:
        cur.execute(
            "UPDATE company_profiles SET name='%s', inn='%s', address='%s', phone='%s', email='%s', delivery_address='%s', updated_at=NOW() WHERE user_id=%d"
            % (name, inn, address, phone, email, description, user['id'])
        )
    else:
        cur.execute(
            "INSERT INTO company_profiles (user_id, name, inn, address, phone, email, delivery_address) VALUES (%d, '%s', '%s', '%s', '%s', '%s', '%s')"
            % (user['id'], name, inn, address, phone, email, description)
        )
    conn.commit()
    cur.close()
    return json_response(200, {'ok': True})

def handle_get_cart(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    cur = conn.cursor()
    cur.execute("SELECT product_id, product_name, price, quantity, image, description FROM cart_items WHERE user_id = %d ORDER BY created_at" % user['id'])
    rows = cur.fetchall()
    cur.close()

    items = [{'id': r[0], 'name': r[1], 'price': float(r[2]), 'quantity': r[3], 'image': r[4], 'description': r[5]} for r in rows]
    return json_response(200, {'cart': items})

def handle_update_cart(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    body = json.loads(event.get('body', '{}'))
    items = body.get('items', [])

    cur = conn.cursor()
    cur.execute("DELETE FROM cart_items WHERE user_id = %d" % user['id'])

    for item in items:
        pid = str(item.get('id', '')).replace("'", "''")
        pname = str(item.get('name', '')).replace("'", "''")
        price = float(item.get('price', 0))
        qty = int(item.get('quantity', 1))
        img = str(item.get('image', '')).replace("'", "''")
        desc = str(item.get('description', '')).replace("'", "''")
        cur.execute(
            "INSERT INTO cart_items (user_id, product_id, product_name, price, quantity, image, description) VALUES (%d, '%s', '%s', %s, %d, '%s', '%s')"
            % (user['id'], pid, pname, price, qty, img, desc)
        )
    conn.commit()
    cur.close()
    return json_response(200, {'ok': True})

def handle_create_order(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    cur = conn.cursor()
    cur.execute("SELECT product_id, product_name, price, quantity, image, description FROM cart_items WHERE user_id = %d" % user['id'])
    cart_rows = cur.fetchall()

    if not cart_rows:
        cur.close()
        return json_response(400, {'error': 'Корзина пуста'})

    items = [{'id': r[0], 'name': r[1], 'price': float(r[2]), 'quantity': r[3], 'image': r[4], 'description': r[5]} for r in cart_rows]
    total = sum(i['price'] * i['quantity'] for i in items)

    cur.execute("SELECT name, address, phone, email, delivery_address FROM company_profiles WHERE user_id = %d" % user['id'])
    profile = cur.fetchone()
    company_name = profile[0] if profile else ''
    delivery_addr = (profile[4] or profile[1]) if profile else ''
    phone_val = profile[2] if profile else ''
    email_val = profile[3] if profile else user['email']

    items_json = json.dumps(items, ensure_ascii=False).replace("'", "''")
    cur.execute(
        "INSERT INTO orders (user_id, total_price, company_name, delivery_address, phone, email, items_json) VALUES (%d, %s, '%s', '%s', '%s', '%s', '%s') RETURNING id, created_at"
        % (user['id'], total, company_name.replace("'", "''"), delivery_addr.replace("'", "''"), phone_val.replace("'", "''"), email_val.replace("'", "''"), items_json)
    )
    order_row = cur.fetchone()

    cur.execute("DELETE FROM cart_items WHERE user_id = %d" % user['id'])
    conn.commit()
    cur.close()

    return json_response(200, {'order': {'id': order_row[0], 'total': total, 'items': items, 'createdAt': str(order_row[1])}})

def handle_get_orders(event, conn):
    token = get_auth_token(event)
    user = get_user_by_token(conn, token)
    if not user:
        return json_response(401, {'error': 'Не авторизован'})

    cur = conn.cursor()
    cur.execute(
        "SELECT id, total_price, status, company_name, delivery_address, phone, email, items_json, created_at FROM orders WHERE user_id = %d ORDER BY created_at DESC"
        % user['id']
    )
    rows = cur.fetchall()
    cur.close()

    orders = []
    for r in rows:
        items = json.loads(r[7]) if r[7] else []
        orders.append({
            'id': r[0],
            'totalPrice': float(r[1]),
            'status': r[2],
            'companyName': r[3],
            'deliveryAddress': r[4],
            'phone': r[5],
            'email': r[6],
            'items': items,
            'createdAt': str(r[8])
        })

    return json_response(200, {'orders': orders})

def handler(event, context):
    """API для управления пользователями, профилями компаний, корзиной и заказами"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    method = event.get('httpMethod', 'GET')
    path = event.get('path', '/')
    params = event.get('queryStringParameters') or {}
    action = params.get('action', '') or path.strip('/')

    conn = get_db()
    try:
        if action == 'register' and method == 'POST':
            return handle_register(event, conn)
        elif action == 'login' and method == 'POST':
            return handle_login(event, conn)
        elif action == 'me' and method == 'GET':
            return handle_me(event, conn)
        elif action == 'logout' and method == 'POST':
            return handle_logout(event, conn)
        elif action == 'profile' and method == 'GET':
            return handle_get_profile(event, conn)
        elif action == 'profile' and method in ('POST', 'PUT'):
            return handle_save_profile(event, conn)
        elif action == 'cart' and method == 'GET':
            return handle_get_cart(event, conn)
        elif action == 'cart' and method in ('POST', 'PUT'):
            return handle_update_cart(event, conn)
        elif action == 'order' and method == 'POST':
            return handle_create_order(event, conn)
        elif action == 'orders' and method == 'GET':
            return handle_get_orders(event, conn)
        else:
            return json_response(200, {'status': 'ok', 'actions': ['register', 'login', 'me', 'logout', 'profile', 'cart', 'order', 'orders']})
    except Exception as e:
        return json_response(500, {'error': str(e)})
    finally:
        conn.close()