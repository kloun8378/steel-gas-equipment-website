import { useEffect } from 'react';
import { seoKeywords } from '@/data/keywords';

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
  keywords = seoKeywords,
  image = "/img/cc26b52b-4249-44c3-89a9-85aa4631579e.jpg",
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