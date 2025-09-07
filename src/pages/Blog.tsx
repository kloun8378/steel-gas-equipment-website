import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Как выбрать скоростной клапан для газопровода",
    excerpt: "Подробное руководство по выбору скоростных клапанов аварийного отключения с учетом диаметра трубопровода, рабочего давления и условий эксплуатации.",
    content: `Скоростные клапаны аварийного отключения — критически важный элемент безопасности газопроводных систем. Правильный выбор клапана обеспечивает надежную защиту оборудования и персонала.

**Основные параметры выбора:**

1. **Диаметр условного прохода (ДУ)** — должен соответствовать диаметру трубопровода. Стандартный ряд: ДУ15, ДУ20, ДУ25, ДУ32, ДУ40, ДУ50, ДУ65, ДУ80, ДУ100.

2. **Рабочее давление** — клапан должен выдерживать максимальное рабочее давление в системе плюс запас прочности 30%.

3. **Температурный режим** — стандартные клапаны работают при температуре от -40°C до +80°C.

4. **Тип присоединения** — фланцевое или межфланцевое исполнение.

**Рекомендации по установке:**
- Устанавливать на входе в здания и сооружения
- Обеспечить свободный доступ для обслуживания
- Предусмотреть дренаж конденсата
- Установить манометр до и после клапана`,
    category: "Техническая информация",
    date: "2024-12-15",
    author: "Инженер СтальПро",
    image: "/img/320cfa56-027d-46b1-888b-40b895562848.jpg"
  },
  {
    id: 2,
    title: "Обслуживание предохранительных клапанов ППЦЗ-12",
    excerpt: "Регламент технического обслуживания предохранительных клапанов, график проверок и замены комплектующих для обеспечения безотказной работы.",
    content: `Предохранительные клапаны ППЦЗ-12 требуют регулярного технического обслуживания для обеспечения надежной работы.

**Периодичность обслуживания:**
- Ежемесячный осмотр
- Полугодовая проверка
- Ежегодная поверка

**Основные работы при ТО:**

1. **Внешний осмотр:**
   - Проверка целостности корпуса
   - Состояние резьбовых соединений
   - Отсутствие утечек газа

2. **Функциональная проверка:**
   - Проверка давления срабатывания
   - Плотность запирания
   - Время открытия/закрытия

3. **Замена расходных материалов:**
   - Пружины (каждые 3-5 лет)
   - Золотник (при износе)
   - Уплотнения (ежегодно)

**Признаки необходимости ремонта:**
- Несанкционированное срабатывание
- Негерметичность в закрытом состоянии
- Изменение давления срабатывания
- Заедание штока`,
    category: "Обслуживание",
    date: "2024-12-10",
    author: "Сервисная служба",
    image: "/img/320cfa56-027d-46b1-888b-40b895562848.jpg"
  },
  {
    id: 3,
    title: "Новые требования к газовой арматуре в 2024 году",
    excerpt: "Обзор изменений в технических регламентах и стандартах для газового оборудования, вступивших в силу в 2024 году.",
    content: `В 2024 году вступили в силу обновленные требования к газовой арматуре, которые касаются производителей и потребителей оборудования.

**Основные изменения:**

1. **Ужесточение требований к сертификации:**
   - Обязательные испытания на соответствие ТР ТС 032/2013
   - Расширенный перечень испытаний для клапанов высокого давления
   - Новые требования к маркировке

2. **Цифровизация документооборота:**
   - Электронные паспорта изделий
   - QR-коды для прослеживаемости
   - Интеграция с государственными информационными системами

3. **Экологические стандарты:**
   - Снижение выбросов при производстве
   - Требования к утилизации
   - Использование экологически чистых материалов

4. **Безопасность и надежность:**
   - Увеличены сроки гарантии до 5 лет
   - Обязательный контроль качества на всех этапах
   - Новые методы неразрушающего контроля

**Рекомендации для потребителей:**
- Приобретайте оборудование только у сертифицированных производителей
- Требуйте полный комплект документов
- Проверяйте актуальность сертификатов`,
    category: "Новости отрасли",
    date: "2024-12-05",
    author: "Отдел качества",
    image: "/img/320cfa56-027d-46b1-888b-40b895562848.jpg"
  },
  {
    id: 4,
    title: "Монтаж газорегуляторных пунктов: пошаговое руководство",
    excerpt: "Детальная инструкция по монтажу ГРП с описанием всех этапов работ, требований безопасности и нормативной базы.",
    content: `Монтаж газорегуляторного пункта — ответственная операция, требующая соблюдения всех технических требований и норм безопасности.

**Подготовительный этап:**

1. **Проектная документация:**
   - Рабочие чертежи ГРП
   - Спецификация оборудования
   - Схемы обвязки
   - Технические условия

2. **Получение разрешений:**
   - Согласование с газовой службой
   - Разрешение на проведение работ
   - Допуск персонала к работам

**Основные этапы монтажа:**

1. **Подготовка основания:**
   - Устройство фундамента
   - Гидроизоляция
   - Установка закладных деталей

2. **Монтаж оборудования:**
   - Установка шкафа ГРП
   - Монтаж трубопроводов
   - Установка арматуры и приборов

3. **Обвязка и подключения:**
   - Сварочные работы
   - Контроль качества сварных соединений
   - Подключение КИП и средств автоматизации

4. **Испытания:**
   - Гидравлические испытания
   - Пневматические испытания
   - Настройка регуляторов давления

**Требования безопасности:**
- Соблюдение противопожарных расстояний
- Использование сертифицированных материалов
- Контроль загазованности при работах`,
    category: "Монтаж",
    date: "2024-11-28",
    author: "Монтажная служба",
    image: "/img/320cfa56-027d-46b1-888b-40b895562848.jpg"
  },
  {
    id: 5,
    title: "Автоматизация газовых систем: современные решения",
    excerpt: "Обзор современных систем автоматизации для газового оборудования, включая SCADA, телеметрию и дистанционное управление.",
    content: `Автоматизация газовых систем повышает безопасность, надежность и эффективность эксплуатации оборудования.

**Современные решения автоматизации:**

1. **SCADA системы:**
   - Централизованный контроль и управление
   - Визуализация технологических процессов
   - Ведение архивов данных
   - Аварийная сигнализация

2. **Телеметрические системы:**
   - Дистанционный мониторинг параметров
   - GSM/WiFi связь
   - Передача данных в облако
   - Мобильные приложения для операторов

3. **Интеллектуальная арматура:**
   - Клапаны с электроприводом
   - Встроенные датчики позиции
   - Самодиагностика состояния
   - Прогнозирование ресурса

**Преимущества автоматизации:**
- Снижение риска аварий на 90%
- Экономия газа до 15%
- Сокращение затрат на обслуживание
- Повышение точности учета

**Этапы внедрения:**
1. Техническое обследование объекта
2. Разработка технического задания
3. Проектирование системы
4. Поставка и монтаж оборудования
5. Пуско-наладка и обучение персонала

**Окупаемость проекта:**
Типовые системы автоматизации окупаются за 2-3 года за счет снижения эксплуатационных расходов и предотвращения аварий.`,
    category: "Автоматизация",
    date: "2024-11-20",
    author: "Отдел автоматизации",
    image: "/img/320cfa56-027d-46b1-888b-40b895562848.jpg"
  }
];

const categories = ["Все", ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "Все" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Блог о газовом оборудовании | СтальПро"
        description="Полезные статьи о газовой арматуре, клапанах, монтаже, обслуживании и новинках отрасли от экспертов СтальПро."
      />
      <Header />
      
      <main className="flex-1">
        {!selectedPost ? (
          <>
            {/* Hero секция */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <Icon name="BookOpen" className="h-16 w-16 mx-auto mb-6 text-white" />
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Блог о газовом оборудовании
                  </h1>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Экспертные статьи, практические руководства и новости отрасли
                  </p>
                </div>
              </div>
            </section>

            {/* Фильтры */}
            <section className="py-8 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Список статей */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.author}
                          </span>
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                          >
                            Читать далее
                            <Icon name="ArrowRight" className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Просмотр статьи */
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-primary hover:text-primary/80 flex items-center gap-2"
              >
                <Icon name="ArrowLeft" className="h-4 w-4" />
                Назад к статьям
              </button>
              
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {selectedPost.category}
                    </span>
                    <span className="text-gray-500">
                      {new Date(selectedPost.date).toLocaleDateString('ru-RU')}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{selectedPost.author}</span>
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-6 text-gray-900">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="prose max-w-none">
                    {selectedPost.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                            {paragraph.slice(2, -2)}
                          </h3>
                        );
                      }
                      return (
                        <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}