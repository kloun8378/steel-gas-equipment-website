import { Helmet } from 'react-helmet-async';
import Icon from '@/components/ui/icon';
import FlangesHeader from '@/components/flanges/FlangesHeader';
import FlangesDetails from '@/components/flanges/FlangesDetails';
import FlangesFAQ from '@/components/flanges/FlangesFAQ';

export default function Flanges() {
  return (
    <>
    <Helmet>
      <title>Фланцы ГОСТ 33259-2015 купить — СтальПроКлапан, Барнаул</title>
      <meta name="description" content="Фланцы стальные плоские приварные по ГОСТ 33259-2015 общего назначения. В наличии на складе в Барнауле. Доставка по РФ." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="фланцы ГОСТ 33259-2015, фланец стальной плоский приварной, фланец купить, фланец трубопровода, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Фланцы ГОСТ 33259-2015 — СтальПроКлапан" />
      <meta property="og:description" content="Фланцы стальные плоские приварные по ГОСТ 33259-2015 общего назначения. Доставка по всей России." />
      <meta property="og:url" content="https://xn--80awjdfch6f.com/flanges" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://xn--80awjdfch6f.com/flanges" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/"},
          {"@type": "ListItem", "position": 2, "name": "Фланцы ГОСТ 33259-2015", "item": "https://xn--80awjdfch6f.com/flanges"}
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что означает стандарт ГОСТ 33259-2015?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ГОСТ 33259-2015 — межгосударственный стандарт на фланцы арматуры, соединительных частей и трубопроводов, устанавливающий типы, конструкцию, размеры и технические требования к фланцевым соединениям."
            }
          },
          {
            "@type": "Question",
            "name": "Как подобрать нужный диаметр фланца?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Диаметр фланца должен соответствовать условному проходу трубопровода или присоединительному размеру арматуры. Если сомневаетесь — уточните диаметр по телефону +7 960 937-35-42."
            }
          },
          {
            "@type": "Question",
            "name": "На какое давление рассчитаны фланцы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Фланцы изготовлены для давления PN16, что соответствует требованиям большинства промышленных трубопроводных систем общего назначения."
            }
          },
          {
            "@type": "Question",
            "name": "Возможна ли доставка по всей России?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon."
            }
          },
          {
            "@type": "Question",
            "name": "Есть ли документы на фланцы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, в комплекте поставки — сертификат соответствия ГОСТ 33259-2015. Документы можно запросить по email sadoxa1996@mail.ru."
            }
          }
        ]
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      <FlangesHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => window.location.href = '/'}
          >Главная</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Фланцы ГОСТ 33259-2015</span>
        </nav>

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Фланцы ГОСТ 33259-2015
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-sm text-gray-600">4.8 — <a href="/reviews" className="underline hover:text-primary">6 отзывов</a></span>
          </div>
        </div>

        {/* Категории фланцев */}
        <div className="max-w-md mx-auto mb-10">
          <a
            href="/flanges/tip-01-ispolnenie-b"
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="CircleDashed" className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Тип 01, исполнение B</h3>
                <p className="text-sm text-gray-600">Фланец стальной плоский приварной ГОСТ 33259-2015</p>
              </div>
              <Icon name="ArrowRight" className="h-5 w-5 text-blue-600 flex-shrink-0" />
            </div>
          </a>
        </div>

        <FlangesDetails />
        <FlangesFAQ />
      </div>
    </div>
    </>
  );
}