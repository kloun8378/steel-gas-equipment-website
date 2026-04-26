"""Эндпоинты для восстановления пароля: запрос сброса и установка нового пароля"""
import json
import os
import hashlib
import secrets
import psycopg2
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

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

def send_reset_email(to_email, reset_link):
    sender = 'sadoxa1996@mail.ru'
    password = os.environ['MAIL_APP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Восстановление пароля — СтальПро'
    msg['From'] = f'СтальПро <{sender}>'
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #1d4ed8;">Восстановление пароля</h2>
        <p>Вы запросили восстановление пароля для вашего аккаунта на сайте <b>СтальПро</b>.</p>
        <p>Нажмите на кнопку ниже, чтобы задать новый пароль. Ссылка действительна <b>1 час</b>.</p>
        <a href="{reset_link}" style="display:inline-block;margin:16px 0;padding:12px 28px;background:#1d4ed8;color:#fff;text-decoration:none;border-radius:6px;font-size:15px;">
            Восстановить пароль
        </a>
        <p style="color:#6b7280;font-size:13px;">Если вы не запрашивали восстановление пароля — просто проигнорируйте это письмо.</p>
        <p style="color:#6b7280;font-size:13px;">Ссылка: {reset_link}</p>
    </div>
    """
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, password)
        server.sendmail(sender, to_email, msg.as_string())

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

        send_reset_email(email, reset_link)

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