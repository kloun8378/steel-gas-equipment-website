// Конфигурация EmailJS
// Замените эти значения на ваши ключи из https://emailjs.com

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Из Dashboard → Account → Public Key
  SERVICE_ID: 'YOUR_SERVICE_ID', // Из Email Services
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Из Email Templates
};

// Шаблон письма для EmailJS:
/*
Тема: Восстановление пароля - СтальПро

Содержание:
Здравствуйте!

Вы запросили восстановление пароля для аккаунта {{user_email}}

Для восстановления пароля перейдите по ссылке:
{{reset_link}}

Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо.

С уважением,
Команда СтальПро
*/