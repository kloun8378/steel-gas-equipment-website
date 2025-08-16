import emailjs from '@emailjs/browser';

// EmailJS конфигурация (замените на ваши реальные ключи)
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5', // Создайте в emailjs.com
  templateId: 'template_order', // Создайте шаблон в emailjs.com
  publicKey: 'your_public_key' // Ваш Public Key из emailjs.com
};

interface OrderData {
  company: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  cart: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

export const sendOrderEmail = async (orderData: OrderData): Promise<boolean> => {
  try {
    // Инициализация EmailJS
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Формируем данные для отправки
    const templateParams = {
      to_email: 'sadoxa1996@mail.ru',
      from_name: orderData.company,
      company: orderData.company,
      contact: orderData.contact,
      phone: orderData.phone,
      email: orderData.email,
      address: orderData.address,
      cart_items: orderData.cart.map(item => 
        `• ${item.name} - ${item.quantity} шт. × ${item.price.toLocaleString()} ₽ = ${(item.price * item.quantity).toLocaleString()} ₽`
      ).join('\n'),
      total: orderData.total.toLocaleString(),
      order_date: new Date().toLocaleDateString('ru-RU')
    };

    // Отправка письма
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email отправлен успешно:', response);
    return true;

  } catch (error) {
    console.error('Ошибка отправки email:', error);
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