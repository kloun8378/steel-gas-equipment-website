def handler(event: dict, context) -> dict:
    """YML-фид категории «Исполнители» для Яндекс.Вебмастера: предложения на изготовление и поставку клапанов СУГ по разделам каталога."""
    from datetime import datetime, timezone, timedelta

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    common_params = """        <param name="Рейтинг">4.9</param>
        <param name="Число отзывов">23</param>
        <param name="Годы опыта">15</param>
        <param name="Регион">Барнаул</param>
        <param name="Конверсия">1.0</param>
        <param name="Ссылка на телефон">tel:+79609373542</param>
        <param name="Организация">true</param>
        <param name="Выполняется удаленно">true</param>
        <param name="Выполняется по адресу исполнителя">true</param>"""

    feed_date = datetime.now(timezone(timedelta(hours=7))).strftime('%Y-%m-%d %H:%M')

    xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<yml_catalog date="{feed_date}">
  <shop>
    <name>СтальПроКлапан</name>
    <company>СтальПроКлапан</company>
    <url>https://xn--80awjdfch6f.com</url>
    <email>sadoxa1996@mail.ru</email>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Исполнитель</category>
      <category id="11" parentId="1">Производство и поставка промышленного оборудования</category>
      <category id="12" parentId="11">Скоростные клапаны СУГ</category>
      <category id="13" parentId="11">Предохранительные клапаны СУГ</category>
      <category id="14" parentId="11">Комплектующие для клапанов СУГ</category>
      <category id="15" parentId="11">Насосное оборудование</category>
      <category id="16" parentId="11">Фланцы</category>
    </categories>
    <sets>
      <set id="s1">
        <name>Скоростные клапаны СУГ в Барнауле</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/index.html</url>
      </set>
      <set id="s2">
        <name>Предохранительные клапаны СУГ в Барнауле</name>
        <url>https://xn--80awjdfch6f.com/safety-valve/index.html</url>
      </set>
      <set id="s3">
        <name>Комплектующие для клапанов СУГ в Барнауле</name>
        <url>https://xn--80awjdfch6f.com/components/index.html</url>
      </set>
      <set id="s4">
        <name>Насосное оборудование в Барнауле</name>
        <url>https://xn--80awjdfch6f.com/pump-equipment/index.html</url>
      </set>
      <set id="s5">
        <name>Фланцы в Барнауле</name>
        <url>https://xn--80awjdfch6f.com/flanges/index.html</url>
      </set>
    </sets>
    <offers>

      <offer id="tpa11-025" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-025/index.html</url>
        <price>5592</price>
        <currencyId>RUR</currencyId>
        <categoryId>12</categoryId>
        <set-ids>s1</set-ids>
        <picture>https://стальпро.com/img/tpa11-025.jpg</picture>
        <description>Изготовление и поставка скоростного клапана межфланцевого ТПА11-025 ДУ25</description>
{common_params}
      </offer>

      <offer id="tpa11-032" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-032/index.html</url>
        <price>6202</price>
        <currencyId>RUR</currencyId>
        <categoryId>12</categoryId>
        <set-ids>s1</set-ids>
        <picture>https://стальпро.com/img/tpa11-032.jpg</picture>
        <description>Изготовление и поставка скоростного клапана межфланцевого ТПА11-032 ДУ32</description>
{common_params}
      </offer>

      <offer id="tpa11-040" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-040/index.html</url>
        <price>7015</price>
        <currencyId>RUR</currencyId>
        <categoryId>12</categoryId>
        <set-ids>s1</set-ids>
        <picture>https://стальпро.com/img/tpa11-040.jpg</picture>
        <description>Изготовление и поставка скоростного клапана межфланцевого ТПА11-040 ДУ40</description>
{common_params}
      </offer>

      <offer id="tpa11-050" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-050/index.html</url>
        <price>10065</price>
        <currencyId>RUR</currencyId>
        <categoryId>12</categoryId>
        <set-ids>s1</set-ids>
        <picture>https://стальпро.com/img/tpa11-050.jpg</picture>
        <description>Изготовление и поставка скоростного клапана межфланцевого ТПА11-050 ДУ50</description>
{common_params}
      </offer>

      <offer id="ppcz12" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/safety-valve/ppcz-12/index.html</url>
        <price>9659</price>
        <currencyId>RUR</currencyId>
        <categoryId>13</categoryId>
        <set-ids>s2</set-ids>
        <picture>https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg</picture>
        <description>Изготовление и поставка предохранительного клапана ППЦЗ-12</description>
{common_params}
      </offer>

      <offer id="pk32l" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/safety-valve/pk-32-l/index.html</url>
        <price>15860</price>
        <currencyId>RUR</currencyId>
        <categoryId>13</categoryId>
        <set-ids>s2</set-ids>
        <picture>https://cdn.poehali.dev/files/f187ae93-500e-48da-b85b-e45604043b8c.jpg</picture>
        <description>Изготовление и поставка предохранительного клапана ПК-32-Л</description>
{common_params}
      </offer>

      <offer id="spring-ppcz12" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/components/spring-ppcz12/index.html</url>
        <price>2745</price>
        <currencyId>RUR</currencyId>
        <categoryId>14</categoryId>
        <set-ids>s3</set-ids>
        <picture>https://стальпро.com/img/spring-ppcz12.jpg</picture>
        <description>Поставка пружины для клапана ППЦЗ-12</description>
{common_params}
      </offer>

      <offer id="valve-ppcz12" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/components/valve-ppcz12/index.html</url>
        <price>1129</price>
        <currencyId>RUR</currencyId>
        <categoryId>14</categoryId>
        <set-ids>s3</set-ids>
        <picture>https://cdn.poehali.dev/files/9c839c8e-b655-47fd-b7b7-88de84d3c7ff.jpg</picture>
        <description>Поставка золотника для клапана ППЦЗ-12</description>
{common_params}
      </offer>

      <offer id="flange4-ppcz12" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/components/flange4-ppcz12/index.html</url>
        <price>4372</price>
        <currencyId>RUR</currencyId>
        <categoryId>14</categoryId>
        <set-ids>s3</set-ids>
        <picture>https://стальпро.com/img/flange4-ppcz12.jpg</picture>
        <description>Поставка фланца на 4 отверстия к клапану ППЦЗ-12</description>
{common_params}
      </offer>

      <offer id="flange8-ppcz12" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/components/flange8-ppcz12/index.html</url>
        <price>4372</price>
        <currencyId>RUR</currencyId>
        <categoryId>14</categoryId>
        <set-ids>s3</set-ids>
        <picture>https://стальпро.com/img/flange8-ppcz12.jpg</picture>
        <description>Поставка фланца на 8 отверстий к клапану ППЦЗ-12</description>
{common_params}
      </offer>

      <offer id="pump-frame-corken-fd150" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/pump-equipment/corken-fd150-frame/index.html</url>
        <price>3800</price>
        <currencyId>RUR</currencyId>
        <categoryId>15</categoryId>
        <set-ids>s4</set-ids>
        <picture>https://стальпро.com/img/pump-frame-corken-fd150.jpg</picture>
        <description>Поставка рамы насоса Corken FD 150</description>
{common_params}
      </offer>

      <offer id="flange-100-1-01-1-b-st20" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/flanges/tip-01-ispolnenie-b/index.html</url>
        <price>1241</price>
        <currencyId>RUR</currencyId>
        <categoryId>16</categoryId>
        <set-ids>s5</set-ids>
        <picture>https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/65209240-7cda-4461-a3e8-489fcdb0c0e1.webp</picture>
        <description>Поставка фланца 100-1-01-1-B-Ст 20-I-dв 110 ГОСТ 33259-2015</description>
{common_params}
      </offer>

      <offer id="flange-100-1-01-1-b-st20-dv116" available="true">
        <name>СтальПроКлапан</name>
        <url>https://xn--80awjdfch6f.com/flanges/tip-01-ispolnenie-b-dv116/index.html</url>
        <price>1241</price>
        <currencyId>RUR</currencyId>
        <categoryId>16</categoryId>
        <set-ids>s5</set-ids>
        <picture>https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/7800d7c0-8b08-4988-8523-65dc2a73c5f1.webp</picture>
        <description>Поставка фланца 100-1-01-1-B-Ст 20-I-dв 116 ГОСТ 33259-2015</description>
{common_params}
      </offer>

    </offers>
  </shop>
</yml_catalog>"""

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/xml; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
        },
        'body': xml,
    }