# ⚡ Быстрое исправление EmailJS

## 🔴 Критические проблемы найдены:

### 1. Неправильная конфигурация
```javascript
// ❌ ТЕКУЩИЕ (НЕПРАВИЛЬНЫЕ) ЗНАЧЕНИЯ:
serviceId: 'service_osw4pc5'           // неправильный формат
templateId: '_a6ZxzTOr5qpPTybr_2Ji'   // начинается с подчеркивания
publicKey: 'UsA8zjcYvrlcSqY1b'        // слишком короткий
```

### 2. Несоответствие параметров шаблона
- В коде: `to_name`, `from_name`, `message`
- В инструкциях: `{{company}}`, `{{contact}}`, `{{phone}}`

## ✅ Быстрые исправления:

### Шаг 1: Создайте .env файл
```env
REACT_APP_EMAILJS_SERVICE_ID=service_ваш_реальный_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_ваш_реальный_id  
REACT_APP_EMAILJS_PUBLIC_KEY=ваш_реальный_публичный_ключ
```

### Шаг 2: Зарегистрируйтесь на EmailJS
1. Идите на https://emailjs.com
2. Создайте сервис (Gmail/Outlook)
3. Создайте шаблон письма
4. Скопируйте правильные ID

### Шаг 3: Проверьте работу
```javascript
// В консоли браузера:
window.diagnoseEmailJS()
```

## 🛠 Правильный формат ID:
- ✅ Service ID: `service_abc123def`
- ✅ Template ID: `template_xyz789`  
- ✅ Public Key: `abcd1234efgh5678ijkl` (15+ символов)

## 📞 Если нужна помощь:
Откройте `EMAILJS_SETUP.md` для подробной инструкции.

---
⚠️ **БЕЗ НАСТРОЙКИ EMAILJS ЗАКАЗЫ НЕ ОТПРАВЛЯЮТСЯ!**