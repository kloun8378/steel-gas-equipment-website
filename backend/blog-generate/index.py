"""Блог: чтение статей (GET) и автогенерация новой статьи через OpenAI (action=generate).
Функция generate предназначена для периодического вызова внешним планировщиком (например, раз в неделю)."""
import json
import os
import re
import random
import urllib.request
import urllib.error
import psycopg2

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Secret-Key',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
}

TOPICS = [
    "Как выбрать диаметр скоростного клапана для конкретного трубопровода",
    "Ошибки монтажа предохранительных клапанов и как их избежать",
    "Сравнение материалов корпуса клапанов СУГ: сталь 12Х18Н10Т и аналоги",
    "Чек-лист приёмки клапанов СУГ при поставке на объект",
    "Как климатическое исполнение УХЛ1 влияет на надёжность клапана зимой",
    "Периодичность поверки манометров на объектах СУГ",
    "Особенности эксплуатации клапанов на газонаполнительных станциях (ГНС)",
    "Как правильно хранить клапаны и комплектующие на складе",
    "Типичные причины отказа скоростных клапанов и их устранение",
    "Что входит в паспорт изделия и зачем он нужен при проверках",
    "Разница между клапанами отечественного и импортного производства",
    "Как рассчитать необходимое количество клапанов для нового объекта АГЗС",
]

CATEGORIES = ["Техническая информация", "Обслуживание", "Новости отрасли", "Монтаж", "Автоматизация"]

DEFAULT_IMAGES = [
    "https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png",
    "https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg",
    "https://cdn.poehali.dev/files/5ac93727-7216-4047-aa8d-69d6b828c2a1.jpg",
    "https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg",
]

SYSTEM_PROMPT = """Ты — технический копирайтер компании "СтальПроКлапан", российского производителя клапанов для сжиженного углеводородного газа (СУГ): скоростных клапанов ТПА11, предохранительных клапанов ППЦЗ-12, насосного оборудования. Клиенты — АГЗС, ГНС, автоцистерны.

Напиши статью для блога на заданную тему. Ответ верни СТРОГО в формате JSON без markdown-обёртки, со следующими полями:
{
  "title": "заголовок статьи (до 90 символов)",
  "excerpt": "краткое описание для анонса, 1-2 предложения (150-200 символов)",
  "content": "полный текст статьи в формате: заголовки разделов оформлены как **Заголовок раздела**, абзацы разделены двойным переводом строки \\n\\n, списки через дефис или цифры. Не используй markdown-таблицы если не уверен в форматировании. Объём 300-500 слов.",
  "category": "одна из категорий: Техническая информация, Обслуживание, Новости отрасли, Монтаж, Автоматизация"
}

Пиши по-деловому, технически точно, без воды и общих фраз. Упоминай реальные модели: ТПА11-025/032/040/050, ППЦЗ-12. Не выдумывай нормативные документы или цифры, если не уверен — пиши обобщённо."""


def get_db():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def json_response(status, body):
    return {
        'statusCode': status,
        'headers': CORS_HEADERS,
        'body': json.dumps(body, ensure_ascii=False, default=str)
    }


def row_to_post(row):
    return {
        'id': row[0],
        'slug': row[1],
        'title': row[2],
        'excerpt': row[3],
        'content': row[4],
        'category': row[5],
        'date': str(row[6]),
        'author': row[7],
        'image': row[8],
    }


def slugify(text):
    translit = {
        'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i',
        'й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t',
        'у':'u','ф':'f','х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'',
        'э':'e','ю':'yu','я':'ya'
    }
    text = text.lower()
    result = ''.join(translit.get(ch, ch) for ch in text)
    result = re.sub(r'[^a-z0-9\s-]', '', result)
    result = re.sub(r'\s+', '-', result.strip())
    result = re.sub(r'-+', '-', result)
    return result[:80].strip('-')


def call_openai(topic, category_hint):
    api_key = os.environ['OPENAI_API_KEY']
    payload = {
        'model': 'gpt-4o-mini',
        'messages': [
            {'role': 'system', 'content': SYSTEM_PROMPT},
            {'role': 'user', 'content': f'Тема статьи: {topic}\nПредпочтительная категория: {category_hint}'}
        ],
        'temperature': 0.7,
        'response_format': {'type': 'json_object'}
    }
    req = urllib.request.Request(
        'https://api.openai.com/v1/chat/completions',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        },
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    content = data['choices'][0]['message']['content']
    return json.loads(content)


def handle_generate(event, conn):
    headers = event.get('headers', {})
    secret_key = headers.get('X-Secret-Key', headers.get('x-secret-key', ''))
    expected_key = os.environ.get('BLOG_GENERATE_SECRET', '')
    if expected_key and secret_key != expected_key:
        return json_response(403, {'error': 'Доступ запрещён'})

    cur = conn.cursor()
    cur.execute("SELECT title FROM blog_posts")
    existing_titles = {row[0] for row in cur.fetchall()}

    available_topics = [t for t in TOPICS if t not in existing_titles]
    if not available_topics:
        available_topics = TOPICS
    topic = random.choice(available_topics)
    category_hint = random.choice(CATEGORIES)

    try:
        generated = call_openai(topic, category_hint)
    except urllib.error.HTTPError as e:
        cur.close()
        error_body = e.read().decode('utf-8', errors='ignore')
        return json_response(502, {'error': 'Ошибка запроса к OpenAI', 'details': error_body})
    except Exception as e:
        cur.close()
        return json_response(500, {'error': f'Ошибка генерации: {str(e)}'})

    title = generated.get('title', topic)[:490]
    excerpt = generated.get('excerpt', '')
    content = generated.get('content', '')
    category = generated.get('category', category_hint)
    if category not in CATEGORIES:
        category = category_hint

    slug = slugify(title)

    cur.execute("SELECT id FROM blog_posts WHERE slug = %s", (slug,))
    if cur.fetchone():
        slug = f"{slug}-{random.randint(100, 999)}"

    image = random.choice(DEFAULT_IMAGES)
    author = "Технический отдел СтальПроКлапан"

    cur.execute(
        """INSERT INTO blog_posts (slug, title, excerpt, content, category, post_date, author, image, generated_by_ai)
           VALUES (%s, %s, %s, %s, %s, CURRENT_DATE, %s, %s, TRUE)
           RETURNING id""",
        (slug, title, excerpt, content, category, author, image)
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()

    return json_response(200, {
        'success': True,
        'post': {
            'id': new_id,
            'slug': slug,
            'title': title,
            'category': category
        }
    })


def handle_list_or_get(event, conn):
    params = event.get('queryStringParameters') or {}
    slug = params.get('slug')

    cur = conn.cursor()
    cols = "id, slug, title, excerpt, content, category, post_date, author, image"

    if slug:
        safe_slug = slug.replace("'", "''")
        cur.execute(f"SELECT {cols} FROM blog_posts WHERE slug = '{safe_slug}'")
        row = cur.fetchone()
        cur.close()
        if not row:
            return json_response(404, {'error': 'Статья не найдена'})
        return json_response(200, {'post': row_to_post(row)})

    cur.execute(f"SELECT {cols} FROM blog_posts ORDER BY post_date DESC")
    rows = cur.fetchall()
    cur.close()

    posts = [row_to_post(r) for r in rows]
    return json_response(200, {'posts': posts})


def handler(event: dict, context) -> dict:
    """Блог: GET без параметров — список статей, GET?slug=... — одна статья,
    GET/POST?action=generate — сгенерировать новую статью через OpenAI (требует X-Secret-Key)"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    params = event.get('queryStringParameters') or {}
    action = params.get('action')

    conn = get_db()
    try:
        if action == 'generate':
            return handle_generate(event, conn)
        return handle_list_or_get(event, conn)
    finally:
        conn.close()
