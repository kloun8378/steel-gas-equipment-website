import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация - обновленная
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5',
  templateId: 'template_a6zxztor5qptybr_2ji', // Исправлен формат в нижнем регистре
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

    // Параметры для отправки (упрощенные для совместимости)
    const templateParams = {
      user_name: orderData.company,
      user_email: orderData.email,
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
    console.error('❌ Детальная ошибка отправки email:', error);
    console.error('❌ Тип ошибки:', typeof error);
    console.error('❌ Сообщение ошибки:', error instanceof Error ? error.message : String(error));
    console.error('❌ Конфигурация:', EMAILJS_CONFIG);
    
    // Попробуем альтернативный подход отправки
    try {
      console.log('🔄 Пробуем альтернативную отправку...');
      
      const altResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.templateId,
          user_id: EMAILJS_CONFIG.publicKey,
          template_params: {
            user_name: orderData.company,
            user_email: orderData.email,
            message: `Заказ от ${orderData.company}\nТелефон: ${orderData.phone}\nТовары: ${orderData.cart.length} шт.\nСумма: ${orderData.total} ₽`
          }
        })
      });
      
      if (altResponse.ok) {
        console.log('✅ Альтернативная отправка успешна!');
        return true;
      } else {
        console.error('❌ Альтернативная отправка тоже не сработала:', await altResponse.text());
      }
    } catch (altError) {
      console.error('❌ Альтернативная отправка не удалась:', altError);
    }
    
    return false;
  }
};