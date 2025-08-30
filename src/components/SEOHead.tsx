import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = "СтальПро - Газовая арматура",
  description = "Производство и поставка газовой арматуры, промышленного газового оборудования. Краны, редукторы, фильтры. Сертификаты качества.",
  keywords = "газовая арматура, промышленное газовое оборудование, краны газовые, редукторы газовые, фильтры газовые, СтальПро, газовое оборудование, скоростной клапан, скоростной клапан ду25, скоростной клапан ду32, скоростной клапан ду40, скоростной клапан ду50, предохранительный клапан, предохранительный клапан ппцз-12, предохранительный клапан рего рс 3132 с отсечным устройством сд32, предохранительный клапан rego rs3132 с отсечным устройством cd32, отсечное устройство cd32, пружина клапана, пружина клапана ппцз-12, золотник, золотник клапана ппцз-12, ремкомплект клапана ппцз-12, запасные части клапана ппцз-12, газовая арматура от производителя, газопровод, газораспределение, газовые станции, промышленный газ, природный газ, газоснабжение, газовые сети, газовое хозяйство, техническое обслуживание газового оборудования, монтаж газового оборудования, ремонт газовой арматуры, сертификация газового оборудования, газовая безопасность, запорная арматура, регулирующая арматура, предохранительная арматура, контрольно-измерительные приборы, манометры газовые, датчики давления газа, газовые горелки, газовые котлы, газотурбинные установки, стальпро.com, стальпро.ru, СтальПро.ru, СтальПро.рф, stalprosib.ru, электромагнитный клапан высокого давления, клапан скоростной межфланцевый, клапан скоростной межфланцевый ZNW DN50, скоростной клапан КС-40 для СУГ, широкая номенклатура продукции, baituvalves.com, aztgrup, aztgrup.ru, тпа астэко, tpa-asteko.ru, tpa, клапаны для СУГ, azsk74.ru, tezagaz.ru, клапан КС-40",
  image = "/img/39740d4c-6887-4461-b9df-e10cfc87d736.jpg",
  url = "https://xn--80awjdfch6f.com",
  type = "website",
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // Обновляем title
    document.title = title;

    // Обновляем meta теги
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Основные meta теги
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);

    // Twitter Card
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:card', 'summary_large_image');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, noindex]);

  return null;
}