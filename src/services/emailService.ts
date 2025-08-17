import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация (замените на ваши реальные ключи)
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5',
  templateId: '_a6ZxzTOr5qpPTybr_2Ji',
  publicKey: 'UsA8zjcYvrlcSqY1b'
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

export const sendOrderEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    console.log('🚀 Начинаем отправку EmailJS');
    console.log('📋 Конфигурация:', EMAILJS_CONFIG);
    
    // Инициализация EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('✅ EmailJS инициализирован');

    // Упрощенные данные для отправки
    const templateParams = {
      to_name: 'Получатель',
      to_email: 'sadoxa1996@mail.ru',
      from_name: orderData.company,
      message: `НОВЫЙ ЗАКАЗ

ДАННЫЕ ПРЕДПРИЯТИЯ:
• Компания: ${orderData.company}
• Контактное лицо: ${orderData.contact}
• Телефон: ${orderData.phone}
• Email: ${orderData.email}
• Адрес: ${orderData.address}

ТОВАРЫ В КОРЗИНЕ:
${orderData.cart.map(item => 
  `• ${item.name} - ${item.quantity} шт. × ${item.price.toLocaleString()} ₽ = ${(item.price * item.quantity).toLocaleString()} ₽`
).join('\n')}

ИТОГО: ${orderData.total.toLocaleString()} ₽

Дата заказа: ${new Date().toLocaleDateString('ru-RU')}`
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
    return false;
  }
};

// Инструкция по настройке EmailJS
export const EMAILJS_SETUP_INSTRUCTIONS = `
Для настройки EmailJS:

1. Зарегистрируйтесь на https://emailjs.com
2. Создайте новый сервис (Gmail/Outlook/etc.)
3. Создайте шаблон письма с параметрами:
   - {{to_email}} - получатель
   - {{from_name}} - отправитель
   - {{company}} - компания
   - {{contact}} - контактное лицо
   - {{phone}} - телефон
   - {{email}} - email
   - {{address}} - адрес
   - {{cart_items}} - товары
   - {{total}} - сумма
   - {{order_date}} - дата

4. Замените в файле src/services/emailService.ts:
   - serviceId: ваш Service ID
   - templateId: ваш Template ID  
   - publicKey: ваш Public Key

5. Настройте шаблон письма в EmailJS Dashboard
`;