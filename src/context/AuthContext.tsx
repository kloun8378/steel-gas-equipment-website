import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types/user';
import api from '@/services/api';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'createdAt'> & { password?: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = api.getToken();
    if (token) {
      api.me()
        .then((data) => {
          setUser({
            ...data.user,
            id: String(data.user.id),
            createdAt: new Date(data.user.createdAt),
          });
        })
        .catch(() => {
          api.clearToken();
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const data = await api.login(email, password);
      setUser({
        ...data.user,
        id: String(data.user.id),
        createdAt: new Date(data.user.createdAt),
      });
      return true;
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Omit<User, 'id' | 'createdAt'> & { password?: string }): Promise<boolean> => {
    setIsLoading(true);
    try {
      const data = await api.register({
        email: userData.email,
        password: userData.password || '',
        name: userData.name,
        company: userData.company,
        phone: userData.phone,
        address: userData.address,
      });
      setUser({
        ...data.user,
        id: String(data.user.id),
        createdAt: new Date(data.user.createdAt),
      });
      return true;
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
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
