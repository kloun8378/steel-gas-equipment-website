import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  date: string;
  source: string;
}

export default function IndustryNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        // Моковые новости газовой отрасли для демонстрации
        // В реальном проекте здесь будет интеграция с новостными API
        const mockNews: NewsItem[] = [
          {
            title: "Новые требования к безопасности газовых клапанов в 2024 году",
            description: "Ростехнадзор утвердил обновленные технические регламенты для промышленной газовой арматуры. Ужесточены требования к испытаниям и сертификации.",
            url: "#",
            date: "2024-12-10",
            source: "Газпром техника"
          },
          {
            title: "Рост спроса на импортозамещающее газовое оборудование",
            description: "Отечественные производители газовой арматуры увеличили выпуск на 40%. Особый рост показали предприятия Сибири и Урала.",
            url: "#",
            date: "2024-12-08",
            source: "Нефтегаз.РУ"
          },
          {
            title: "Инновации в сфере автоматизации газораспределительных станций",
            description: "Представлены новые решения для дистанционного мониторинга и управления газовыми клапанами с использованием IoT-технологий.",
            url: "#",
            date: "2024-12-05",
            source: "Газовая промышленность"
          },
          {
            title: "Модернизация газотранспортной системы: новые стандарты арматуры",
            description: "Газпром объявил о планах замены устаревшего оборудования. Приоритет отдается энергоэффективным решениям российского производства.",
            url: "#",
            date: "2024-12-03",
            source: "Транс Газ"
          },
          {
            title: "Развитие производства промышленных газовых фильтров в России",
            description: "Запущено новое производство высокотехнологичных фильтров для очистки природного газа. Мощность - до 10 тысяч единиц в год.",
            url: "#",
            date: "2024-12-01",
            source: "Промышленные вести"
          }
        ];

        // Имитация задержки загрузки
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setNews(mockNews);
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки новостей');
        console.error('News fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="Newspaper" size={28} className="mr-3 text-blue-600" />
          Новости отрасли
        </h2>
        <div className="grid gap-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="Newspaper" size={28} className="mr-3 text-blue-600" />
          Новости отрасли
        </h2>
        <Card className="border-red-200">
          <CardContent className="p-6 text-center">
            <Icon name="AlertCircle" size={32} className="mx-auto text-red-500 mb-4" />
            <p className="text-red-600 font-medium">{error}</p>
            <p className="text-gray-500 text-sm mt-2">
              Попробуйте обновить страницу
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Icon name="Newspaper" size={28} className="mr-3 text-blue-600" />
          Новости отрасли
        </h2>
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="RefreshCw" size={16} className="mr-2" />
          Обновлено автоматически
        </div>
      </div>

      <div className="grid gap-4">
        {news.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full ml-4 whitespace-nowrap">
                  <Icon name="Zap" size={12} className="mr-1" />
                  Свежие
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Calendar" size={14} className="mr-2" />
                  {formatDate(item.date)}
                  <span className="mx-2">•</span>
                  <Icon name="Building2" size={14} className="mr-2" />
                  {item.source}
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  Читать далее
                  <Icon name="ExternalLink" size={14} className="ml-2" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon name="Info" size={20} className="text-blue-600 mr-3" />
              <div>
                <p className="text-blue-800 font-medium">
                  Автоматическое обновление новостей
                </p>
                <p className="text-blue-600 text-sm">
                  Следим за актуальными событиями в газовой отрасли и производстве оборудования
                </p>
              </div>
            </div>
            <div className="text-blue-600 text-sm">
              <Icon name="Rss" size={16} className="inline mr-1" />
              RSS лента
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}