import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Удаляем предыдущие ld+json scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Организация (компания)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "СтальПро",
      "legalName": "СтальПро",
      "url": "https://xn--80awjdfch6f.com",
      "logo": "https://xn--80awjdfch6f.com/img/39740d4c-6887-4461-b9df-e10cfc87d736.jpg",
      "description": "Производство и поставка газовой арматуры, промышленного газового оборудования",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Кавалерийская 14, бокс 171",
        "addressLocality": "Барнаул",
        "addressRegion": "Алтайский край",
        "addressCountry": "RU"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+7-960-937-35-42",
        "contactType": "sales"
      }, {
        "@type": "ContactPoint", 
        "telephone": "+7-960-950-59-04",
        "contactType": "customer service"
      }, {
        "@type": "ContactPoint",
        "email": "sadoxa1996@mail.ru",
        "contactType": "customer service"
      }],
      "sameAs": [
        "https://стальпро.com"
      ],
      "industry": "Газовое оборудование",
      "numberOfEmployees": "10-50",
      "areaServed": {
        "@type": "Country",
        "name": "Россия"
      }
    };

    // Локальный бизнес
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "СтальПро",
      "image": "https://xn--80awjdfch6f.com/img/39740d4c-6887-4461-b9df-e10cfc87d736.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Кавалерийская 14, бокс 171",
        "addressLocality": "Барнаул",
        "addressRegion": "Алтайский край",
        "postalCode": "656000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.3606,
        "longitude": 83.7636
      },
      "telephone": "+7-960-937-35-42",
      "email": "sadoxa1996@mail.ru",
      "url": "https://xn--80awjdfch6f.com",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // Продукты компании
    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Продукция СтальПро",
      "description": "Газовая арматура и промышленное газовое оборудование",
      "itemListElement": [{
        "@type": "Product",
        "name": "Скоростной клапан",
        "description": "Клапаны аварийного отключения для газопроводов различных диаметров",
        "brand": {
          "@type": "Brand",
          "name": "СтальПро"
        },
        "category": "Газовая арматура",
        "url": "https://xn--80awjdfch6f.com/speed-valve"
      }, {
        "@type": "Product", 
        "name": "Предохранительный клапан",
        "description": "Предохранительные клапаны для защиты газового оборудования от избыточного давления",
        "brand": {
          "@type": "Brand",
          "name": "СтальПро"
        },
        "category": "Газовая арматура", 
        "url": "https://xn--80awjdfch6f.com/safety-valve"
      }, {
        "@type": "Product",
        "name": "Комплектующие",
        "description": "Запасные части и комплектующие для газовой арматуры",
        "brand": {
          "@type": "Brand",
          "name": "СтальПро"
        },
        "category": "Комплектующие",
        "url": "https://xn--80awjdfch6f.com/components"
      }]
    };

    // Веб-сайт
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "СтальПро - Газовая арматура",
      "description": "Производство и поставка газовой арматуры, промышленного газового оборудования",
      "url": "https://xn--80awjdfch6f.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://xn--80awjdfch6f.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "СтальПро"
      },
      "copyrightYear": "2024",
      "inLanguage": "ru-RU"
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Какие типы газовых клапанов вы производите?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы производим скоростные клапаны аварийного отключения, предохранительные клапаны, электромагнитные клапаны, а также комплектующие для газовой арматуры различных диаметров от ДУ15 до ДУ300."
        }
      }, {
        "@type": "Question",
        "name": "Есть ли сертификаты на вашу продукцию?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Да, вся наша продукция имеет необходимые сертификаты соответствия и разрешения на применение в газовой отрасли России."
        }
      }, {
        "@type": "Question",
        "name": "Какие регионы вы обслуживаете?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы поставляем оборудование по всей России, включая Сибирь, Урал, Дальний Восток. Основная база находится в Барнауле, Алтайский край."
        }
      }, {
        "@type": "Question",
        "name": "Предоставляете ли вы гарантию на оборудование?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предоставляем гарантию на всю продукцию, а также осуществляем техническую поддержку и сервисное обслуживание."
        }
      }]
    };

    // Добавляем все schema на страницу
    const schemas = [
      organizationSchema,
      localBusinessSchema, 
      productsSchema,
      websiteSchema,
      faqSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema, null, 2);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      // Очистка при размонтировании
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}