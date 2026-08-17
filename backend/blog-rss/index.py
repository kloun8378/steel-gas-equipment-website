"""RSS-фид блога СтальПроКлапан для Яндекс.Вебмастера и других агрегаторов."""
import os
from datetime import datetime, timezone
from email.utils import format_datetime
from xml.sax.saxutils import escape
import psycopg2

SITE_URL = 'https://стальпро.com'
CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/rss+xml; charset=utf-8'
}


def handler(event: dict, context) -> dict:
    """Отдаёт RSS 2.0 фид последних статей блога для индексации в поиске."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "SELECT slug, title, excerpt, post_date, author, image "
        "FROM blog_posts ORDER BY post_date DESC LIMIT 50"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    items = []
    for slug, title, excerpt, post_date, author, image in rows:
        link = f'{SITE_URL}/blog/{slug}'
        pub_dt = datetime.combine(post_date, datetime.min.time(), tzinfo=timezone.utc)
        pub_date = format_datetime(pub_dt)
        item = f"""    <item>
      <title>{escape(title or '')}</title>
      <link>{escape(link)}</link>
      <guid isPermaLink="true">{escape(link)}</guid>
      <description>{escape(excerpt or '')}</description>
      <author>{escape(author or '')}</author>
      <pubDate>{pub_date}</pubDate>
      {f'<enclosure url="{escape(image)}" type="image/jpeg" />' if image else ''}
    </item>"""
        items.append(item)

    now_rfc822 = format_datetime(datetime.now(timezone.utc))
    items_xml = '\n'.join(items)

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>СтальПроКлапан — Блог</title>
    <link>{SITE_URL}/blog</link>
    <atom:link href="{SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Статьи о клапанах для СУГ, монтаже и обслуживании газовой арматуры</description>
    <language>ru</language>
    <lastBuildDate>{now_rfc822}</lastBuildDate>
{items_xml}
  </channel>
</rss>"""

    return {
        'statusCode': 200,
        'headers': CORS_HEADERS,
        'body': xml,
        'isBase64Encoded': False
    }
