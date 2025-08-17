import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

// EmailJS конфигурация - НАСТРОЕНО!
const EMAILJS_CONFIG = {
  serviceId: 'service_osw4pc5',
  templateId: 'template_npe77ik', 
  publicKey: 'UsA8zjcYvrlcSqY1b'
};

interface CompanyData {
  name: string;
  inn: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

interface OrderData {
  company: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  cart: CartItem[];
  total: number;
  companyData?: CompanyData;
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
    
    // Получаем полные данные компании
    const companyInfo = orderData.companyData || {
      name: orderData.company,
      inn: 'Не указан',
      address: orderData.address,
      phone: orderData.phone,
      email: orderData.email,
      description: 'Не указан'
    };

    const emailContent = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         🏭 НОВЫЙ ЗАКАЗ - СТАЛЬПРО                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌─────────────────────────────────────────────────────────────────────────────────┐
│                                ИНФОРМАЦИЯ О ЗАКАЗЕ                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Номер заказа:     │ ${orderNumber}                                       │
│ Дата:             │ ${orderDate.toLocaleDateString('ru-RU')}                    │
│ Время:            │ ${orderDate.toLocaleTimeString('ru-RU')}                    │
│ Статус:           │ НОВЫЙ - ТРЕБУЕТ ОБРАБОТКИ                             │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                            🏢 КАРТОЧКА ПРЕДПРИЯТИЯ                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Название компании:    │ ${companyInfo.name || 'Не указано'}                    │
│ ИНН:                  │ ${companyInfo.inn || 'Не указан'}                      │
│ Юридический адрес:    │ ${companyInfo.address || 'Не указан'}                  │
│ Контактный телефон:   │ ${companyInfo.phone || 'Не указан'}                    │
│ Email предприятия:    │ ${companyInfo.email || 'Не указан'}                    │
│ Адрес доставки:       │ ${companyInfo.description || 'Не указан'}              │
│ Контактное лицо:      │ ${orderData.contact || 'Не указано'}                   │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              🛒 КОРЗИНА ТОВАРОВ                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│ №  │ НАИМЕНОВАНИЕ ТОВАРА           │ КОЛ-ВО │ ЦЕНА/ШТ    │ СУММА        │
├────┼───────────────────────────────┼────────┼─────────────┼──────────────┤${orderData.cart.map((item, index) => `
│ ${String(index + 1).padStart(2, ' ')} │ ${item.name.substring(0, 29).padEnd(29, ' ')} │ ${String(item.quantity).padStart(6, ' ')} │ ${item.price.toLocaleString('ru-RU').padStart(11, ' ')} │ ${(item.price * item.quantity).toLocaleString('ru-RU').padStart(12, ' ')} │`).join('')}
├────┼───────────────────────────────┼────────┼─────────────┼──────────────┤
│    │ ИТОГО ПОЗИЦИЙ: ${String(orderData.cart.length).padStart(2, ' ')}            │ ${String(orderData.cart.reduce((sum, item) => sum + item.quantity, 0)).padStart(6, ' ')} │             │ ${orderData.total.toLocaleString('ru-RU').padStart(12, ' ')} │
└────┴───────────────────────────────┴────────┴─────────────┴──────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                             💰 ФИНАНСОВАЯ СВОДКА                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Общее количество товаров:     │ ${orderData.cart.reduce((sum, item) => sum + item.quantity, 0)} шт.                         │
│ Количество позиций:           │ ${orderData.cart.length} поз.                        │
│ ОБЩАЯ СУММА ЗАКАЗА:           │ ${orderData.total.toLocaleString('ru-RU')} ₽                    │
│ НДС (если применимо):         │ Уточнить при оформлении           │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                            📞 КОНТАКТЫ ДЛЯ СВЯЗИ                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Email для связи:              │ ${companyInfo.email}                         │
│ Телефон:                      │ ${companyInfo.phone}                         │
│ Компания:                     │ ${companyInfo.name}                          │
│ Контактное лицо:              │ ${orderData.contact}                         │
└─────────────────────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Автоматическое уведомление с сайта СтальПро
🌐 Система создана на poehali.dev - разработка сайтов через ИИ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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