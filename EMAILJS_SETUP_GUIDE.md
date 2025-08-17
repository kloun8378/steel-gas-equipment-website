# 📧 Настройка EmailJS для отправки заказов

## Шаг 1: Регистрация в EmailJS

1. **Перейдите на https://emailjs.com**
2. **Нажмите "Sign Up"** 
3. **Заполните данные:**
   - Email: `sadoxa1996@mail.ru` (или любой другой)
   - Пароль
   - Имя
4. **Подтвердите email** из письма

## Шаг 2: Создание Email Service

1. **В Dashboard нажмите "Add New Service"**
2. **Выберите "Gmail"** (или другой провайдер)
3. **Назовите сервис:** `StalPro Orders`
4. **Нажмите "Connect Account"** и авторизуйтесь в Gmail
5. **Нажмите "Create Service"**
6. **СКОПИРУЙТЕ Service ID** (например: `service_abc123`)

## Шаг 3: Создание Email Template

1. **Перейдите в "Email Templates"**
2. **Нажмите "Create New Template"**
3. **Заполните Template:**

### Subject (Тема письма):
```
Новый заказ от {{user_name}} - СтальПро
```

### Content (Содержимое):
```
Новый заказ через сайт СтальПро!

От: {{user_name}}
Email: {{user_email}}

ДЕТАЛИ ЗАКАЗА:
{{message}}

---
Автоматическое письмо с сайта СтальПро
```

### Email Fields (Поля письма):
- **To Email:** `sadoxa1996@mail.ru`
- **From Name:** `{{user_name}}`
- **From Email:** оставить по умолчанию
- **Reply-To:** `{{user_email}}`

4. **Сохраните шаблон**
5. **СКОПИРУЙТЕ Template ID** (например: `template_xyz789`)

## Шаг 4: Получение Public Key

1. **Перейдите в "Account" → "General"**
2. **СКОПИРУЙТЕ Public Key** (например: `abcd1234efgh5678`)

## Шаг 5: Обновление кода

Вставьте полученные значения в файл `src/services/emailService.ts`:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',      // Ваш Service ID
  templateId: 'template_xyz789',    // Ваш Template ID
  publicKey: 'abcd1234efgh5678'     // Ваш Public Key
};
```

## ✅ Готово!

После этого:
- Заказы будут отправляться на `sadoxa1996@mail.ru`
- В письме будут все данные заказа
- Система автоматически перейдет в рабочий режим

## 🔧 Проверка

1. Добавьте товар в корзину
2. Заполните данные предприятия  
3. Нажмите "Отправить заказ"
4. Проверьте почту `sadoxa1996@mail.ru`

## 📞 Поддержка

Если что-то не работает:
- Проверьте консоль браузера (F12)
- Убедитесь что все ID скопированы правильно
- Проверьте spam папку в Gmail