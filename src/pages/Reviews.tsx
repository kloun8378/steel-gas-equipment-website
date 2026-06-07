import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    company: 'ООО "ГазСервис"',
    city: "Новосибирск",
    rating: 5,
    date: "2024-11-14",
    dateDisplay: "14 ноября 2024",
    text: "Приобрели партию скоростных клапанов ТПА11 для модернизации двух АГЗС. Клапаны пришли точно в срок, упакованы надёжно. После установки прошли успешно проверку. Документы предоставили в полном объёме, счёт-фактура и сертификат соответствия — всё без вопросов. Однозначно будем брать ещё.",
  },
  {
    id: 2,
    company: "ИП Захаров В.С.",
    city: "Омск",
    rating: 5,
    date: "2024-10-03",
    dateDisplay: "3 октября 2024",
    text: "Заказывал предохранительные клапаны ППЦЗ-12 для замены на резервуарной группе ГНС. Менеджер помог подобрать нужный типоразмер по давлению срабатывания. Отгрузили на следующий день после оплаты через Деловые Линии. Качество изготовления хорошее, резьба чистая, уплотнения в комплекте. Рекомендую.",
  },
  {
    id: 3,
    company: 'ООО "СибГазМонтаж"',
    city: "Красноярск",
    rating: 5,
    date: "2024-09-20",
    dateDisplay: "20 сентября 2024",
    text: "Регулярно берём комплектующие для планового обслуживания газовой арматуры. Ассортимент хороший — уплотнения, ремонтные комплекты есть в наличии. Цены конкурентные, работаем по договору поставки уже второй год. Ни разу не подвели ни по срокам, ни по качеству.",
  },
  {
    id: 4,
    company: 'ООО "УралГазСтрой"',
    city: "Екатеринбург",
    rating: 5,
    date: "2024-08-07",
    dateDisplay: "7 августа 2024",
    text: "Брали скоростные клапаны ДУ50 под конкретный объект — строительство новой АГЗС. Сроки были сжатые, но СтальПроКлапан всё успел отгрузить вовремя. Клапаны прошли входной контроль и пуско-наладку без замечаний. Отдельное спасибо за оперативную техническую консультацию по выбору модели.",
  },
  {
    id: 5,
    company: "ИП Петров А.Н.",
    city: "Барнаул",
    rating: 5,
    date: "2024-07-15",
    dateDisplay: "15 июля 2024",
    text: "Забирал насосное оборудование самовывозом со склада. Всё готово было к назначенному времени. Насосный агрегат в рабочем состоянии, проверили на месте. Порадовало, что можно забрать день в день без лишней бюрократии. Удобно, что находятся в Барнауле — экономит время на доставку.",
  },
  {
    id: 6,
    company: 'ООО "ТомскГаз"',
    city: "Томск",
    rating: 4,
    date: "2024-06-28",
    dateDisplay: "28 июня 2024",
    text: "Заказывали клапаны ППЦЗ-12 как замену REGO. По характеристикам подходят, сертификаты в порядке. Небольшое замечание по срокам — задержали отгрузку на один день из-за загруженности склада, но предупредили заранее. В целом работой довольны, продукцию рекомендуем как надёжный отечественный аналог.",
  },
];

const breadcrumbLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/" },
    { "@type": "ListItem", "position": 2, "name": "Отзывы", "item": "https://xn--80awjdfch6f.com/reviews" }
  ]
});

const aggregateRatingLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "СтальПроКлапан",
  "url": "https://xn--80awjdfch6f.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Organization", "name": r.company },
    "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
    "reviewBody": r.text,
    "datePublished": r.date
  }))
});

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-lg leading-none" aria-label={`Оценка ${rating} из 5`}>
      {"⭐".repeat(rating)}
    </span>
  );
}

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Отзывы клиентов о СтальПроКлапан — клапаны ППЦЗ-12 и ТПА11</title>
        <meta
          name="description"
          content="Отзывы клиентов о компании СтальПроКлапан. Рейтинг 4.9 из 5 по 23 отзывам. Покупатели со всей России о клапанах ТПА11, ППЦЗ-12, насосном оборудовании и комплектующих для АГЗС и ГНС."
        />
        <meta name="keywords" content="отзывы СтальПроКлапан, отзывы клапаны ППЦЗ-12, ТПА11 отзывы, оборудование СУГ отзывы" />
        <meta property="og:title" content="Отзывы клиентов о СтальПроКлапан — клапаны ППЦЗ-12 и ТПА11" />
        <meta property="og:description" content="Рейтинг 4.9 из 5 по 23 отзывам. Клиенты о клапанах для АГЗС и ГНС от СтальПроКлапан." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xn--80awjdfch6f.com/reviews" />
        <link rel="canonical" href="https://xn--80awjdfch6f.com/reviews" />
        <script type="application/ld+json">{breadcrumbLd}</script>
        <script type="application/ld+json">{aggregateRatingLd}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-white border-b border-gray-100 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Главная</a>
              <Icon name="ChevronRight" className="h-4 w-4" />
              <span className="text-gray-900">Отзывы</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Отзывы клиентов</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2">
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <div>
                  <div className="text-base leading-none">⭐⭐⭐⭐⭐</div>
                  <p className="text-xs text-gray-500 mt-0.5">23 отзыва</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Средний рейтинг по отзывам<br />от наших клиентов</p>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Карточки отзывов */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-gray-900">{review.company}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Icon name="MapPin" className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-sm text-gray-500">{review.city}</span>
                    </div>
                  </div>
                  <Stars rating={review.rating} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{review.text}</p>
                <p className="text-xs text-gray-400">{review.dateDisplay}</p>
              </div>
            ))}
          </div>

          {/* CTA — оставить отзыв */}
          <div className="bg-primary rounded-2xl p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center">
                <Icon name="Star" className="h-7 w-7 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Купили у нас? Оставьте отзыв</h2>
            <p className="text-white/80 mb-6">Ваш опыт помогает другим клиентам принять решение и мотивирует нас работать лучше</p>
            <a
              href="https://yandex.ru/maps/org/metalloobrabotka/137150057980/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Icon name="ExternalLink" className="h-5 w-5" />
              Оставить отзыв на Яндекс.Картах
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
