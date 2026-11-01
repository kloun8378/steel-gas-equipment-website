import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {AuthProvider} from "@/context/AuthContext";
import {CartProvider} from "@/context/CartContext";
import StructuredData from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";
import SEOHead from "@/components/SEOHead";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import NotFound from "@/pages/NotFound";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import appCss from "@/index.css?url";

// Заголовок страницы задаёт сама страница (<title> в разметке поднимается в <head>).

const FONTS = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap";

// Структурированные данные JSON-LD (Organization, LocalBusiness, WebSite) — из старого index.html
const SITE_LD = [
    "{\"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"СтальПроКлапан\", \"alternateName\": \"стальпро.com\", \"legalName\": \"ИП Алпеева Анастасия Сергеевна\", \"taxID\": \"220807451225\", \"identifier\": \"322220200096633\", \"url\": \"https://стальпро.com\", \"logo\": \"https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg\", \"description\": \"Производство и поставка скоростных и предохранительных клапанов для СУГ. ППЦЗ-12, ТПА11. Барнаул, Алтайский край.\", \"foundingDate\": \"2020\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"ул. Кавалерийская 14, бокс 171\", \"addressLocality\": \"Барнаул\", \"addressRegion\": \"Алтайский край\", \"postalCode\": \"656000\", \"addressCountry\": \"RU\"}, \"contactPoint\": [{\"@type\": \"ContactPoint\", \"telephone\": \"+79609373542\", \"contactType\": \"sales\", \"availableLanguage\": \"Russian\"}, {\"@type\": \"ContactPoint\", \"telephone\": \"+79609505904\", \"contactType\": \"customer service\", \"availableLanguage\": \"Russian\"}], \"sameAs\": [\"https://xn--80awjdfch6f.com\", \"https://2gis.ru/barnaul/firm/70000001099007177\", \"https://www.ozon.ru/seller/stalpro-3601542/\"], \"numberOfEmployees\": {\"@type\": \"QuantitativeValue\", \"minValue\": 10, \"maxValue\": 50}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"Россия\"}, \"hasOfferCatalog\": {\"@type\": \"OfferCatalog\", \"name\": \"Промышленная газовая арматура для СУГ\", \"itemListElement\": [{\"@type\": \"Offer\", \"itemOffered\": {\"@type\": \"Product\", \"name\": \"Промышленные газовые краны для АГЗС и ГНС\", \"category\": \"Промышленная газовая арматура\"}}, {\"@type\": \"Offer\", \"itemOffered\": {\"@type\": \"Product\", \"name\": \"Промышленные редукторы давления газа\", \"category\": \"Промышленная газовая арматура\"}}, {\"@type\": \"Offer\", \"itemOffered\": {\"@type\": \"Product\", \"name\": \"Промышленные газовые фильтры\", \"category\": \"Промышленная газовая арматура\"}}]}}",
    "{\"@context\": \"https://schema.org\", \"@type\": \"LocalBusiness\", \"name\": \"СтальПроКлапан\", \"image\": \"https://стальпро.com/img/39740d4c-6887-4461-b9df-e10cfc87d736.jpg\", \"description\": \"Производство и поставка промышленной газовой арматуры для АГЗС, ГНС и резервуаров СУГ\", \"url\": \"https://стальпро.com\", \"telephone\": [\"+79609373542\", \"+79609505904\"], \"email\": \"sadoxa1996@mail.ru\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"ул. Кавалерийская 14, бокс 171\", \"addressLocality\": \"Барнаул\", \"addressRegion\": \"Алтайский край\", \"postalCode\": \"656000\", \"addressCountry\": \"RU\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": \"53.3548\", \"longitude\": \"83.7697\"}, \"openingHoursSpecification\": {\"@type\": \"OpeningHoursSpecification\", \"dayOfWeek\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"], \"opens\": \"09:00\", \"closes\": \"18:00\"}, \"priceRange\": \"$$\", \"currenciesAccepted\": \"RUB\", \"areaServed\": \"RU\"}",
    "{\"@context\": \"https://schema.org\", \"@type\": \"WebSite\", \"name\": \"СтальПроКлапан - Промышленная газовая арматура для СУГ\", \"url\": \"https://стальпро.com\", \"description\": \"Производство и поставка промышленной газовой арматуры для АГЗС, ГНС и резервуаров СУГ\", \"inLanguage\": \"ru\", \"potentialAction\": {\"@type\": \"SearchAction\", \"target\": \"https://стальпро.com/search?q={search_term_string}\", \"query-input\": \"required name=search_term_string\"}}",
];

const METRIKA = `(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108507539', 'ym');
ym(108507539, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`;

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"},
            {name: "author", content: "СтальПроКлапан"},
            {name: "language", content: "Russian"},
            {name: "google-site-verification", content: "8Nl1sr0pwK8rHZKvxwK9VyEcXdpurIVYYo2uub8DmXk"},
            {name: "yandex-verification", content: "b372b3d5b46a2c5e"},
            {name: "format-detection", content: "telephone=yes"},
            {name: "mobile-web-app-capable", content: "yes"},
            {name: "apple-mobile-web-app-capable", content: "yes"},
            {name: "apple-mobile-web-app-status-bar-style", content: "default"},
            {name: "theme-color", content: "#1E40AF"},
            {name: "msapplication-TileColor", content: "#1E40AF"},
            {name: "geo.region", content: "RU"},
            {name: "geo.placename", content: "Россия"},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:site", content: "@stalpro"},
            {property: "og:site_name", content: "СтальПроКлапан"},
            {property: "og:locale", content: "ru_RU"},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "alternate", href: "https://xn--80awjdfch6f.com", hrefLang: "ru"},
            {rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {rel: "preconnect", href: "https://cdn.poehali.dev", crossOrigin: "anonymous"},
            {rel: "preconnect", href: "https://mc.yandex.ru", crossOrigin: "anonymous"},
            {rel: "dns-prefetch", href: "https://mc.yandex.ru"},
            {rel: "dns-prefetch", href: "https://yandex.ru"},
            {rel: "dns-prefetch", href: "https://2gis.ru"},
            {rel: "stylesheet", href: FONTS},
            {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
            {rel: "apple-touch-icon", href: "/img/39740d4c-6887-4461-b9df-e10cfc87d736.jpg"},
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            ...SITE_LD.map((json) => ({type: "application/ld+json", children: json})),
            {children: METRIKA},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
    return (
        <>
            <title>Страница не найдена — СтальПроКлапан</title>
            <SEOHead
                title="Страница не найдена — СтальПроКлапан"
                description="Запрашиваемая страница не существует или была перемещена."
                noindex={true}
            />
            <NotFound/>
        </>
    );
}

function RootComponent() {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 60 * 1000,
                        gcTime: 10 * 60 * 1000,
                        retry: 1,
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    );
    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <AuthProvider>
                        <CartProvider>
                            <StructuredData/>
                            <ScrollToAnchor/>
                            <ErrorBoundary>
                                <Outlet/>
                            </ErrorBoundary>
                        </CartProvider>
                    </AuthProvider>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/108507539" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}
