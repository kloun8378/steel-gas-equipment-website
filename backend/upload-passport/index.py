import os
import boto3
import urllib.request
import json

def handler(event: dict, context) -> dict:
    """Скачивает PDF паспорта с Google Drive и загружает в S3 хранилище сайта"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    params = event.get('queryStringParameters') or {}
    file_id = params.get('file_id', '1fw_t7-b8aIGwIjK1clLeFe6aOZq0wS15')
    filename = params.get('filename', 'passport-speed-valve.pdf')

    gdrive_url = f'https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t'

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
        Key=f'docs/{filename}',
        Body=pdf_data,
        ContentType='application/pdf'
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/docs/{filename}"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url, 'size': len(pdf_data)})
    }