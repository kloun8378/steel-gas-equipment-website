export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  phone: string;
  address: string;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  company: string;
  phone: string;
  address: string;
  role: 'admin' | 'manager' | 'employee';
}