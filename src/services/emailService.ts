import emailjs from '@emailjs/browser';
import { CartItem } from '@/context/CartContext';

const SERVICE_ID = 'service_osw4pc5';
const TEMPLATE_ID = 'template_npe77ik';
const PUBLIC_KEY = 'UsA8zjcYvrlcSqY1b';

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
    const orderDate = new Date();
    const orderNumber = `ORD-${orderDate.getFullYear()}${String(orderDate.getMonth() + 1).padStart(2, '0')}${String(orderDate.getDate()).padStart(2, '0')}-${Date.now().toString().slice(-6)}`;

    const companyInfo = orderData.companyData || {
      name: orderData.company,
      inn: 'Не указан',
      address: orderData.address,
      phone: orderData.phone,
      email: orderData.email,
      description: 'Не указан'
    };

    const emailContent = `НОВЫЙ ЗАКАЗ - СТАЛЬПРО\n==================================================\n\nЗАКАЗ ${orderNumber}\n${orderDate.toLocaleDateString('ru-RU')} в ${orderDate.toLocaleTimeString('ru-RU')}\n\nПРЕДПРИЯТИЕ:\nКомпания: ${companyInfo.name || 'Не указано'}\nИНН: ${companyInfo.inn || 'Не указан'}\nАдрес: ${companyInfo.address || 'Не указан'}\nТелефон: ${companyInfo.phone || 'Не указан'}\nEmail: ${companyInfo.email || 'Не указан'}\nДоставка: ${companyInfo.description || 'Не указан'}\n\nТОВАРЫ:\n${orderData.cart.map((item, index) => `${index + 1}. ${item.name} - ${item.quantity} шт x ${item.price.toLocaleString('ru-RU')} р = ${(item.price * item.quantity).toLocaleString('ru-RU')} р`).join('\n')}\n\nИТОГО: ${orderData.total.toLocaleString('ru-RU')} р\n\nКОНТАКТ: ${companyInfo.phone} | ${companyInfo.email}`;

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
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
    }, PUBLIC_KEY);

    return true;
  } catch {
    return false;
  }
};

export default sendOrderEmail;
