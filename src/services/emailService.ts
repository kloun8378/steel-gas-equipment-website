import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация - НАСТРОЕНО!
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5',
  templateId: 'template_npe77ik', 
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
    // Проверяем настройку EmailJS
    if (EMAILJS_CONFIG.serviceId.includes('REPLACE_ME') || 
        EMAILJS_CONFIG.templateId.includes('REPLACE_ME') || 
        EMAILJS_CONFIG.publicKey.includes('REPLACE_ME')) {
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

    // Формируем детальное содержимое письма
    const orderDate = new Date();
    const orderNumber = `ORD-${orderDate.getFullYear()}${String(orderDate.getMonth() + 1).padStart(2, '0')}${String(orderDate.getDate()).padStart(2, '0')}-${Date.now().toString().slice(-6)}`;
    
    const emailContent = `
╔══════════════════════════════════════════════════════════════════╗
║                          🏭 НОВЫЙ ЗАКАЗ - СТАЛЬПРО                          ║
╚══════════════════════════════════════════════════════════════════╝

📋 НОМЕР ЗАКАЗА: ${orderNumber}
📅 ДАТА: ${orderDate.toLocaleDateString('ru-RU', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}
🕐 ВРЕМЯ: ${orderDate.toLocaleTimeString('ru-RU')}

═══════════════════════════════════════════════════════════════════

🏢 КАРТОЧКА ПРЕДПРИЯТИЯ
═══════════════════════════════════════════════════════════════════
🏭 Название компании:     ${orderData.company}
👤 Контактное лицо:       ${orderData.contact}
📞 Телефон:              ${orderData.phone}
📧 Email:                ${orderData.email}
📍 Адрес предприятия:     ${orderData.address}

═══════════════════════════════════════════════════════════════════

🛒 МОЯ КОРЗИНА - ДЕТАЛЬНЫЙ СПИСОК
═══════════════════════════════════════════════════════════════════
${orderData.cart.map((item, index) => `
📦 ТОВАР #${index + 1}
   ├─ Название: ${item.name}
   ├─ Количество: ${item.quantity} шт.
   ├─ Цена за единицу: ${item.price.toLocaleString('ru-RU')} ₽
   ├─ Стоимость: ${(item.price * item.quantity).toLocaleString('ru-RU')} ₽
   └─ Категория: ${item.category || 'Металлопрокат'}
`).join('')}

═══════════════════════════════════════════════════════════════════

💰 ФИНАНСОВАЯ СВОДКА
═══════════════════════════════════════════════════════════════════
📊 Всего товаров:        ${orderData.cart.reduce((sum, item) => sum + item.quantity, 0)} шт.
📋 Позиций в заказе:     ${orderData.cart.length}
💵 ОБЩАЯ СУММА:          ${orderData.total.toLocaleString('ru-RU')} ₽

═══════════════════════════════════════════════════════════════════

⚡ СТАТУС ЗАКАЗА: НОВЫЙ - ТРЕБУЕТ ОБРАБОТКИ
🔔 ПРИОРИТЕТ: СТАНДАРТНЫЙ

═══════════════════════════════════════════════════════════════════

📞 СВЯЖИТЕСЬ С КЛИЕНТОМ:
   Email: ${orderData.email}
   Телефон: ${orderData.phone}
   Компания: ${orderData.company}

═══════════════════════════════════════════════════════════════════
🤖 Автоматическое уведомление с сайта СтальПро
🌐 poehali.dev - разработка сайтов через ИИ
`;

    // Параметры для отправки
    const templateParams = {
      user_name: orderData.company,
      user_email: orderData.email,
      order_number: orderNumber,
      message: emailContent,
      company_name: orderData.company,
      contact_person: orderData.contact,
      phone: orderData.phone,
      email_address: orderData.email,
      company_address: orderData.address,
      total_amount: orderData.total.toLocaleString('ru-RU'),
      total_items: orderData.cart.reduce((sum, item) => sum + item.quantity, 0),
      order_date: orderDate.toLocaleDateString('ru-RU')
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