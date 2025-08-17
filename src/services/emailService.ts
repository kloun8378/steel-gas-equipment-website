import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5',
  templateId: 'template_a6ZxzTOr5qpPTybr_2Ji', 
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
    
    // Инициализация EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Параметры для отправки
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

    // Отправка письма
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('✅ Email отправлен успешно:', response);
    return true;

  } catch (error) {
    console.error('❌ Ошибка отправки email:', error);
    return false;
  }
};