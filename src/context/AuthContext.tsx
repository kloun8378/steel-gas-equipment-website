import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'createdAt'>) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Демо пользователи для разработки
const DEMO_USERS: User[] = [
  {
    id: '1',
    email: 'admin@energiya.ru',
    name: 'Иван Петров',
    company: 'ООО "Энергия"',
    phone: '+7 (495) 123-45-67',
    address: '123456, г. Москва, ул. Промышленная, д. 15',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2', 
    email: 'manager@tekhkom.ru',
    name: 'Анна Сидорова',
    company: 'ТехКом',
    phone: '+7 (812) 987-65-43',
    address: '190000, г. Санкт-Петербург, пр. Невский, д. 28',
    createdAt: new Date('2024-02-01')
  },
  {
    id: '3',
    email: 'buyer@stroytex.ru', 
    name: 'Михаил Козлов',
    company: 'СтройТех',
    phone: '+7 (383) 555-12-34',
    address: '630000, г. Новосибирск, ул. Ленина, д. 45',
    createdAt: new Date('2024-03-01')
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненного пользователя
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser({
          ...userData,
          createdAt: new Date(userData.createdAt)
        });
      } catch (error) {
        console.error('Ошибка загрузки пользователя:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Эмуляция проверки пароля (в реальном проекте здесь будет API)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = DEMO_USERS.find(u => u.email === email);
    
    if (foundUser && password === '123456') { // Демо пароль для всех
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'createdAt'>): Promise<boolean> => {
    setIsLoading(true);
    
    // Эмуляция регистрации
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Проверяем, существует ли пользователь
    const existingUser = DEMO_USERS.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    DEMO_USERS.push(newUser);
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cart'); // Очищаем корзину при выходе
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};