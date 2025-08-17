// Утилиты для работы с localStorage

export const storage = {
  // Сохранить данные
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка сохранения в localStorage:', error);
    }
  },

  // Получить данные
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Ошибка чтения из localStorage:', error);
      return null;
    }
  },

  // Удалить данные
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Ошибка удаления из localStorage:', error);
    }
  },

  // Проверить существование ключа
  has: (key: string): boolean => {
    return localStorage.getItem(key) !== null;
  }
};

// Константы для ключей localStorage
export const STORAGE_KEYS = {
  CURRENT_USER: 'currentUser',
  CART_PREFIX: 'cart_',
  COMPANY_PREFIX: 'company_',
  GUEST_CART: 'cart_guest'
} as const;