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
      "logo": "https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg",
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
      "image": "https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg",
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
      "name": "Продукция СтальПроКлапан",
      "description": "Газовая арматура и промышленное газовое оборудование",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Скоростной клапан межфланцевый ТПА11",
          "description": "Клапаны аварийного отключения для газопроводов. ДУ25/32/40/50. Для АГЗС, ГНС, автоцистерн.",
          "image": "https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png",
          "brand": { "@type": "Brand", "name": "СтальПроКлапан" },
          "offers": {
            "@type": "Offer",
            "price": "5592",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "url": "https://xn--80awjdfch6f.com/speed-valve",
            "seller": { "@type": "Organization", "name": "СтальПроКлапан" }
          }
        }
      }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Предохранительный клапан ППЦЗ-12",
          "description": "Клапан пружинный прямого действия для СУГ. Рабочее давление 1,6 МПа.",
          "image": "https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg",
          "brand": { "@type": "Brand", "name": "СтальПроКлапан" },
          "offers": {
            "@type": "Offer",
            "price": "9659",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "url": "https://xn--80awjdfch6f.com/safety-valve",
            "seller": { "@type": "Organization", "name": "СтальПроКлапан" }
          }
        }
      }, {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Комплектующие для клапанов СУГ",
          "description": "Запасные части и комплектующие для ППЦЗ-12 и ТПА11.",
          "image": "https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg",
          "brand": { "@type": "Brand", "name": "СтальПроКлапан" },
          "offers": {
            "@type": "Offer",
            "price": "1129",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "url": "https://xn--80awjdfch6f.com/components",
            "seller": { "@type": "Organization", "name": "СтальПроКлапан" }
          }
        }
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