def handler(event: dict, context) -> dict:
    """Товарный YML-фид для Яндекс.Вебмастер"""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    xml = """<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="2026-06-13">
  <shop>
    <name>СтальПроКлапан</name>
    <company>СтальПроКлапан</company>
    <url>https://xn--80awjdfch6f.com</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Скоростные клапаны</category>
      <category id="2">Предохранительные клапаны</category>
      <category id="3">Комплектующие</category>
      <category id="4">Насосное оборудование</category>
    </categories>
    <offers>
      <offer id="tpa11-025" available="true">
        <name>Скоростной клапан межфланцевый ТПА11-025 ДУ25</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-025</url>
        <price>5592</price>
        <currencyId>RUR</currencyId>
        <categoryId>1</categoryId>
        <picture>https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ТПА11-025</vendorCode>
        <description>Скоростной межфланцевый клапан аварийного отключения СУГ. Условный проход ДУ25, давление 4,0 МПа, сталь 12X18H10T, срок службы 5 лет. Сертификат EAC. В наличии на складе в Барнауле.</description>
        <param name="Условный проход">ДУ25</param>
        <param name="Давление условное">4,0 МПа</param>
        <param name="Материал корпуса">Сталь 12X18H10T</param>
        <param name="Срок службы">5 лет</param>
        <param name="Сертификат">EAC</param>
      </offer>
      <offer id="tpa11-032" available="true">
        <name>Скоростной клапан межфланцевый ТПА11-032 ДУ32</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-032</url>
        <price>6202</price>
        <currencyId>RUR</currencyId>
        <categoryId>1</categoryId>
        <picture>https://cdn.poehali.dev/files/a5f6db14-b102-4128-acba-cdd414c672d5.jpg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ТПА11-032</vendorCode>
        <description>Скоростной межфланцевый клапан аварийного отключения СУГ. Условный проход ДУ32, давление 4,0 МПа, сталь 12X18H10T, срок службы 5 лет. Сертификат EAC. В наличии на складе в Барнауле.</description>
        <param name="Условный проход">ДУ32</param>
        <param name="Давление условное">4,0 МПа</param>
        <param name="Материал корпуса">Сталь 12X18H10T</param>
        <param name="Срок службы">5 лет</param>
        <param name="Сертификат">EAC</param>
      </offer>
      <offer id="tpa11-040" available="true">
        <name>Скоростной клапан межфланцевый ТПА11-040 ДУ40</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-040</url>
        <price>7015</price>
        <currencyId>RUR</currencyId>
        <categoryId>1</categoryId>
        <picture>https://cdn.poehali.dev/files/8a4392c5-af78-4f21-86ef-1d9f5da98262.jpg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ТПА11-040</vendorCode>
        <description>Скоростной межфланцевый клапан аварийного отключения СУГ. Условный проход ДУ40, давление 4,0 МПа, сталь 12X18H10T, срок службы 5 лет. Сертификат EAC. В наличии на складе в Барнауле.</description>
        <param name="Условный проход">ДУ40</param>
        <param name="Давление условное">4,0 МПа</param>
        <param name="Материал корпуса">Сталь 12X18H10T</param>
        <param name="Срок службы">5 лет</param>
        <param name="Сертификат">EAC</param>
      </offer>
      <offer id="tpa11-050" available="true">
        <name>Скоростной клапан межфланцевый ТПА11-050 ДУ50</name>
        <url>https://xn--80awjdfch6f.com/speed-valve/tpa11-050</url>
        <price>10065</price>
        <currencyId>RUR</currencyId>
        <categoryId>1</categoryId>
        <picture>https://cdn.poehali.dev/files/5ac93727-7216-4047-aa8d-69d6b828c2a1.jpg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ТПА11-050</vendorCode>
        <description>Скоростной межфланцевый клапан аварийного отключения СУГ. Условный проход ДУ50, давление 4,0 МПа, сталь 12X18H10T, срок службы 5 лет. Сертификат EAC. В наличии на складе в Барнауле.</description>
        <param name="Условный проход">ДУ50</param>
        <param name="Давление условное">4,0 МПа</param>
        <param name="Материал корпуса">Сталь 12X18H10T</param>
        <param name="Срок службы">5 лет</param>
        <param name="Сертификат">EAC</param>
      </offer>
      <offer id="ppcz12" available="true">
        <name>Предохранительный клапан ППЦЗ-12</name>
        <url>https://xn--80awjdfch6f.com/safety-valve</url>
        <price>9659</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <picture>https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ППЦЗ-12</vendorCode>
        <description>Предохранительный клапан пружинный прямого действия для СУГ. Рабочее давление 1,6 МПа. Применение: АГЗС, ГНС, резервуары СУГ, автоцистерны. Сертификат EAC. В наличии на складе в Барнауле.</description>
        <param name="Рабочее давление">1,6 МПа</param>
        <param name="Тип">Пружинный прямого действия</param>
        <param name="Сертификат">EAC</param>
      </offer>
      <offer id="pk32l" available="true">
        <name>Предохранительный клапан ПК-32-Л</name>
        <url>https://xn--80awjdfch6f.com/safety-valve</url>
        <price>15860</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <picture>https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>ПК-32-Л</vendorCode>
        <description>Предохранительный клапан пружинный для СУГ DN32. Применение: АГЗС, ГНС, резервуары СУГ, автоцистерны. В наличии на складе в Барнауле.</description>
        <param name="Условный проход">DN32</param>
        <param name="Тип">Пружинный</param>
      </offer>
      <offer id="spring-ppcz12" available="true">
        <name>Пружина для клапана ППЦЗ-12</name>
        <url>https://xn--80awjdfch6f.com/components</url>
        <price>2745</price>
        <currencyId>RUR</currencyId>
        <categoryId>3</categoryId>
        <picture>https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>Пружина-ППЦЗ12</vendorCode>
        <description>Пружина предохранительного клапана ППЦЗ-12 для замены. Подходит для восстановления работоспособности клапана без полной замены.</description>
      </offer>
      <offer id="valve-ppcz12" available="true">
        <name>Золотник для клапана ППЦЗ-12</name>
        <url>https://xn--80awjdfch6f.com/components</url>
        <price>1129</price>
        <currencyId>RUR</currencyId>
        <categoryId>3</categoryId>
        <picture>https://cdn.poehali.dev/files/9c839c8e-b655-47fd-b7b7-88de84d3c7ff.jpg</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>Золотник-ППЦЗ12</vendorCode>
        <description>Золотник для пружинного клапана прямого действия ППЦЗ-12. Запасная часть для ремонта и обслуживания предохранительных клапанов СУГ.</description>
      </offer>
      <offer id="flange4-ppcz12" available="true">
        <name>Фланец на 4 отверстия к ППЦЗ-12</name>
        <url>https://xn--80awjdfch6f.com/components</url>
        <price>4372</price>
        <currencyId>RUR</currencyId>
        <categoryId>3</categoryId>
        <picture>https://cdn.poehali.dev/files/c16e6d83-1159-4dba-b0ec-18812a8b2f59.JPEG</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>Фланец4-ППЦЗ12</vendorCode>
        <description>Фланец предохранительной арматуры на 4 отверстия для автоцистерн и резервуаров СУГ. Совместим с клапаном ППЦЗ-12.</description>
      </offer>
      <offer id="flange8-ppcz12" available="true">
        <name>Фланец на 8 отверстий к ППЦЗ-12</name>
        <url>https://xn--80awjdfch6f.com/components</url>
        <price>4372</price>
        <currencyId>RUR</currencyId>
        <categoryId>3</categoryId>
        <picture>https://cdn.poehali.dev/files/c93d4236-8b9f-4ec4-8e77-8f18dd2ff13f.JPEG</picture>
        <vendor>СтальПроКлапан</vendor>
        <vendorCode>Фланец8-ППЦЗ12</vendorCode>
        <description>Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ. Совместим с клапаном ППЦЗ-12.</description>
      </offer>
      <offer id="pump-frame-corken-fd150" available="true">
        <name>Рама насоса Corken FD 150</name>
        <url>https://xn--80awjdfch6f.com/pump-equipment</url>
        <price>3800</price>
        <currencyId>RUR</currencyId>
        <categoryId>4</categoryId>
        <picture>https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png</picture>
        <vendor>Corken</vendor>
        <vendorCode>Corken-FD150-Frame</vendorCode>
        <description>Единая усиленная стальная рама для крепления насоса Corken FD 150 и двигателя. Обеспечивает жёсткость конструкции, предотвращает перекосы при монтаже на основание.</description>
        <param name="Совместимость">Corken FD 150</param>
        <param name="Материал">Сталь</param>
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
