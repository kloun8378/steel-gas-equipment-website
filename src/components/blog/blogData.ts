export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

export const defaultCategories = ["Все", "Техническая информация", "Обслуживание", "Новости отрасли", "Монтаж", "Автоматизация"];
