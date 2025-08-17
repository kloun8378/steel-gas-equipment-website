import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация - ЗАМЕНИТЕ НА ВАШИ РЕАЛЬНЫЕ ЗНАЧЕНИЯ!
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',     // Получите из EmailJS Dashboard
  templateId: 'YOUR_TEMPLATE_ID',   // Получите из EmailJS Dashboard  
  publicKey: 'YOUR_PUBLIC_KEY'      // Получите из EmailJS Dashboard
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
    // Проверяем настройку EmailJS
    if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
        EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      console.log('⚠️ EmailJS НЕ НАСТРОЕН! Перейдите в режим демонстрации...');
      
      // Сохраняем заказ локально как fallback
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const newOrder = {
        id: Date.now(),
        ...orderData,
        date: new Date().toISOString(),
        status: 'pending'
      };
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      console.log('📧 НАСТРОЙТЕ EmailJS для отправки на: sadoxa1996@mail.ru');
      return true;
    }
    
    console.log('🚀 Отправляем заказ через EmailJS');
    
    // Инициализация EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Параметры для отправки
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

    console.log('✅ Email отправлен успешно на sadoxa1996@mail.ru:', response);
    return true;

  } catch (error) {
    console.error('❌ Ошибка при сохранении заказа:', error);
    return false;
  }
};