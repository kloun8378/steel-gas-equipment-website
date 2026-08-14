import { useEffect } from 'react';

// Organization, LocalBusiness и WebSite schema уже добавлены статически в index.html
// (видны краулерам без выполнения JS). Здесь только уникальные данные, которых там нет.
export default function StructuredData() {
  useEffect(() => {
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
            "url": "https://стальпро.com/speed-valve",
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
            "url": "https://стальпро.com/safety-valve",
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
            "url": "https://стальпро.com/components",
            "seller": { "@type": "Organization", "name": "СтальПроКлапан" }
          }
        }
      }]
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
      productsSchema,
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