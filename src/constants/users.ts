import { User } from '@/types/user';

// Демо пользователи для системы
export const DEMO_USERS: User[] = [
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

export const DEMO_PASSWORD = '123456';