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
    console.log('🚀 ВРЕМЕННО: Имитируем отправку заказа (EmailJS пока не настроен)');
    
    // Сохраняем заказ в localStorage для демонстрации
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: Date.now(),
      ...orderData,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    console.log('✅ ЗАКАЗ СОХРАНЕН ЛОКАЛЬНО:', newOrder);
    console.log('📧 В реальном проекте здесь будет отправка на email: sadoxa1996@mail.ru');
    
    // Имитируем небольшую задержку как при реальной отправке
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;

  } catch (error) {
    console.error('❌ Ошибка при сохранении заказа:', error);
    return false;
  }
};