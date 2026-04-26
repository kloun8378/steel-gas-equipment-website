"""Эндпоинты для восстановления пароля: запрос сброса и установка нового пароля"""
import json
import os
import hashlib
import secrets
import psycopg2
import urllib.request
import urllib.parse

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
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
        'body': json.dumps(body, ensure_ascii=False)
    }

def send_via_emailjs(to_email, reset_link):
    public_key = os.environ['EMAILJS_PUBLIC_KEY']
    private_key = os.environ['EMAILJS_PRIVATE_KEY']
    service_id = os.environ['EMAILJS_SERVICE_ID']
    template_id = 'template_hgdylqe'

    payload = json.dumps({
        'service_id': service_id,
        'template_id': template_id,
        'user_id': public_key,
        'accessToken': private_key,
        'template_params': {
            'to_email': to_email,
            'user_email': to_email,
            'reset_link': reset_link,
            'from_name': 'СтальПро'
        }
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.emailjs.com/api/v1.0/email/send',
        data=payload,
        headers={'Content-Type': 'application/json', 'origin': 'https://стальпро.com'},
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.status == 200

def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    method = event.get('httpMethod', 'GET')
    body = json.loads(event.get('body') or '{}')
    params = event.get('queryStringParameters') or {}
    action = params.get('action', body.get('action', ''))

    conn = get_db()
    cur = conn.cursor()

    # POST action=forgot — запрос на сброс пароля
    if method == 'POST' and action == 'forgot':
        email = body.get('email', '').strip().lower()
        if not email:
            cur.close(); conn.close()
            return json_response(400, {'error': 'Введите email'})

        cur.execute("SELECT id FROM users WHERE email = '%s'" % email.replace("'", "''"))
        user = cur.fetchone()
        if not user:
            cur.close(); conn.close()
            return json_response(404, {'error': 'Пользователь с таким email не найден'})

        token = secrets.token_urlsafe(32)
        cur.execute(
            "UPDATE users SET reset_token = '%s', reset_token_expires_at = NOW() + INTERVAL '1 hour' WHERE email = '%s'"
            % (token, email.replace("'", "''"))
        )
        conn.commit()

        origin = event.get('headers', {}).get('origin', 'https://стальпро.com')
        reset_link = f"{origin}/reset-password?token={token}"

        send_via_emailjs(email, reset_link)

        cur.close(); conn.close()
        return json_response(200, {'success': True, 'message': 'Письмо отправлено'})

    # POST action=reset — установка нового пароля по токену
    if method == 'POST' and action == 'reset':
        token = body.get('token', '').strip()
        new_password = body.get('password', '').strip()

        if not token or not new_password:
            cur.close(); conn.close()
            return json_response(400, {'error': 'Токен и пароль обязательны'})

        if len(new_password) < 6:
            cur.close(); conn.close()
            return json_response(400, {'error': 'Пароль должен быть не менее 6 символов'})

        cur.execute(
            "SELECT id, email FROM users WHERE reset_token = '%s' AND reset_token_expires_at > NOW()"
            % token.replace("'", "''")
        )
        user = cur.fetchone()
        if not user:
            cur.close(); conn.close()
            return json_response(400, {'error': 'Ссылка недействительна или устарела. Запросите новую.'})

        pw_hash = hash_password(new_password)
        cur.execute(
            "UPDATE users SET password_hash = '%s', reset_token = NULL, reset_token_expires_at = NULL, updated_at = NOW() WHERE id = %d"
            % (pw_hash, user[0])
        )
        conn.commit()
        cur.close(); conn.close()
        return json_response(200, {'success': True, 'message': 'Пароль успешно изменён'})

    cur.close(); conn.close()
    return json_response(404, {'error': 'Not found'})