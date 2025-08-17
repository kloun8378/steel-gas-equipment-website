import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация - ТРЕБУЕТ НАСТРОЙКИ!
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', // Например: service_abc123def
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', // Например: template_abc123def
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' // Например: abcd1234efgh5678ijkl
};

interface OrderData {
  company: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  cart: CartItem[];
  total: number;
}

// Функция проверки конфигурации EmailJS
export const validateEmailJSConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
    errors.push('❌ Service ID не настроен или неправильный');
  }
  
  if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID') {
    errors.push('❌ Template ID не настроен или неправильный');
  }
  
  if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
    errors.push('❌ Public Key не настроен или неправильный');
  }
  
  // Проверяем формат Service ID
  if (EMAILJS_CONFIG.serviceId && !EMAILJS_CONFIG.serviceId.startsWith('service_')) {
    errors.push('⚠️ Service ID должен начинаться с "service_"');
  }
  
  // Проверяем формат Template ID
  if (EMAILJS_CONFIG.templateId && !EMAILJS_CONFIG.templateId.startsWith('template_')) {
    errors.push('⚠️ Template ID должен начинаться с "template_"');
  }
  
  // Проверяем длину Public Key
  if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey.length < 15) {
    errors.push('⚠️ Public Key слишком короткий (должен быть длиннее 15 символов)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Функция диагностики EmailJS (вызовите в консоли: window.diagnoseEmailJS())
export const diagnoseEmailJS = () => {
  console.log('🔍 ДИАГНОСТИКА EMAILJS:');
  console.log('📋 Текущая конфигурация:', EMAILJS_CONFIG);
  
  const validation = validateEmailJSConfig();
  if (validation.isValid) {
    console.log('✅ Конфигурация валидна');
  } else {
    console.log('❌ Найдены ошибки конфигурации:');
    validation.errors.forEach(error => console.log(error));
  }
  
  console.log('📝 Шаги для исправления:');
  console.log('1. Проверьте файл .env или EMAILJS_CONFIG в src/services/emailService.ts');
  console.log('2. Откройте EMAILJS_SETUP.md для подробных инструкций');
  console.log('3. Убедитесь, что EmailJS сервис и шаблоны созданы на https://emailjs.com');
  
  return validation;
};

// Экспортируем функцию диагностики в глобальную область (для отладки)
if (typeof window !== 'undefined') {
  (window as any).diagnoseEmailJS = diagnoseEmailJS;
}

export const sendOrderEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    console.log('🚀 Начинаем отправку EmailJS');
    console.log('📋 Конфигурация:', EMAILJS_CONFIG);
    
    // Проверяем конфигурацию перед отправкой
    const validation = validateEmailJSConfig();
    if (!validation.isValid) {
      console.error('❌ Ошибки конфигурации EmailJS:', validation.errors);
      validation.errors.forEach(error => console.error(error));
      return false;
    }
    console.log('✅ Конфигурация EmailJS валидна');
    
    // Инициализация EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('✅ EmailJS инициализирован');

    // Параметры для EmailJS шаблона
    const templateParams = {
      // Основные поля
      to_name: 'СтальПро Менеджер',
      to_email: 'sadoxa1996@mail.ru',
      from_name: orderData.company,
      reply_to: orderData.email,
      
      // Данные компании
      company: orderData.company,
      contact: orderData.contact,
      phone: orderData.phone,
      email: orderData.email,
      address: orderData.address,
      
      // Данные заказа
      cart_items: orderData.cart.map(item => 
        `${item.name} - ${item.quantity} шт. × ${item.price.toLocaleString()} ₽ = ${(item.price * item.quantity).toLocaleString()} ₽`
      ).join('\n'),
      total: orderData.total.toLocaleString() + ' ₽',
      order_date: new Date().toLocaleDateString('ru-RU'),
      
      // Полное сообщение (для простых шаблонов)
      message: `НОВЫЙ ЗАКАЗ ОТ ${orderData.company}

` +
               `ДАННЫЕ ПРЕДПРИЯТИЯ:
• Компания: ${orderData.company}
• Контактное лицо: ${orderData.contact}
• Телефон: ${orderData.phone}
• Email: ${orderData.email}
• Адрес: ${orderData.address}

` +
               `ТОВАРЫ:
${orderData.cart.map(item => 
                 `• ${item.name} - ${item.quantity} шт. × ${item.price.toLocaleString()} ₽ = ${(item.price * item.quantity).toLocaleString()} ₽`
               ).join('\n')}

` +
               `ИТОГО: ${orderData.total.toLocaleString()} ₽
` +
               `Дата: ${new Date().toLocaleDateString('ru-RU')}`
    };

    console.log('📦 Параметры для отправки:', templateParams);

    // Отправка письма
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('✅ Email отправлен успешно:', response);
    return true;

  } catch (error) {
    console.error('❌ Детальная ошибка отправки email:', error);
    console.error('❌ Тип ошибки:', typeof error);
    console.error('❌ Сообщение ошибки:', error instanceof Error ? error.message : String(error));
    
    // Проверяем типичные ошибки EmailJS
    if (error instanceof Error) {
      if (error.message.includes('service')) {
        console.error('🔧 Проверьте Service ID в EMAILJS_CONFIG');
      }
      if (error.message.includes('template')) {
        console.error('🔧 Проверьте Template ID в EMAILJS_CONFIG');
      }
      if (error.message.includes('user') || error.message.includes('public')) {
        console.error('🔧 Проверьте Public Key в EMAILJS_CONFIG');
      }
    }
    
    return false;
  }
};

// ПОШАГОВАЯ ИНСТРУКЦИЯ ПО НАСТРОЙКЕ EmailJS
export const EMAILJS_SETUP_INSTRUCTIONS = `
🔧 ИНСТРУКЦИЯ ПО НАСТРОЙКЕ EmailJS:

1. Регистрация и создание сервиса:
   • Зайдите на https://emailjs.com и зарегистрируйтесь
   • Создайте новый Email Service (Gmail/Outlook/Yahoo)
   • Скопируйте Service ID (например: service_abc123def)

2. Создание шаблона письма:
   • Создайте новый Email Template
   • Используйте эти параметры в шаблоне:
     {{to_name}} - имя получателя
     {{from_name}} - название компании
     {{company}} - компания заказчика
     {{contact}} - контактное лицо
     {{phone}} - телефон
     {{email}} - email для связи
     {{address}} - адрес компании
     {{cart_items}} - список товаров
     {{total}} - общая сумма
     {{order_date}} - дата заказа
     {{message}} - полный текст заказа
   • Скопируйте Template ID (например: template_abc123def)

3. Получение Public Key:
   • В разделе Account найдите Public Key
   • Скопируйте его (например: abcd1234efgh5678ijkl)

4. Настройка в коде:
   • Создайте файл .env в корне проекта:
     REACT_APP_EMAILJS_SERVICE_ID=ваш_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=ваш_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=ваш_public_key
   
   • ИЛИ замените значения в EMAILJS_CONFIG в src/services/emailService.ts

5. Тестирование:
   • Добавьте товары в корзину
   • Нажмите "Оформить заказ" в Dashboard
   • Проверьте консоль браузера на ошибки
   • Проверьте почту на получение письма

📧 Пример шаблона письма для EmailJS:
---
Тема: Новый заказ от {{company}}

От: {{from_name}} <{{email}}>
Кому: {{to_name}}

{{message}}

С уважением,
Автоматическая система СтальПро
---

⚠️  ВНИМАНИЕ: Без правильной настройки EmailJS заказы отправляться НЕ БУДУТ!
`;