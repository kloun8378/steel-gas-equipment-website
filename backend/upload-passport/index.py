import os
import boto3
import urllib.request

def handler(event: dict, context) -> dict:
    """Скачивает PDF паспорта с Google Drive и загружает в S3 хранилище сайта"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    gdrive_url = 'https://drive.usercontent.google.com/download?id=1fw_t7-b8aIGwIjK1clLeFe6aOZq0wS15&export=download&confirm=t'

    req = urllib.request.Request(gdrive_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as response:
        pdf_data = response.read()

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    s3.put_object(
        Bucket='files',
        Key='docs/passport-speed-valve.pdf',
        Body=pdf_data,
        ContentType='application/pdf'
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/docs/passport-speed-valve.pdf"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': f'{{"url": "{cdn_url}", "size": {len(pdf_data)}}}'
    }
