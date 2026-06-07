import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const breadcrumbLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/" },
    { "@type": "ListItem", "position": 2, "name": "О компании", "item": "https://xn--80awjdfch6f.com/about" }
  ]
});

const stats = [
  { icon: "CalendarDays", label: "на рынке", value: "с 2020 года", color: "bg-blue-50 text-blue-600" },
  { icon: "Users", label: "клиентов", value: "500+", color: "bg-green-50 text-green-600" },
  { icon: "Truck", label: "доставка", value: "по всей России", color: "bg-orange-50 text-orange-600" },
  { icon: "ShieldCheck", label: "сертификат", value: "EAC", color: "bg-primary/10 text-primary" },
];

const advantages = [
  {
    icon: "Factory",
    title: "Производство в России",
    desc: "Собственное производство в Барнауле без зависимости от импортных комплектующих. Стабильный склад и короткие сроки поставки.",
  },
  {
    icon: "BadgeCheck",
    title: "Сертифицированная продукция",
    desc: "Вся продукция сертифицирована по EAC и соответствует требованиям ТР ТС. Полный пакет документов при отгрузке.",
  },
  {
    icon: "Warehouse",
    title: "Склад в Барнауле",
    desc: "Поддерживаем постоянный складской запас. Отгрузка в день поступления оплаты по всей России.",
  },
];

const products = [
  { href: "/speed-valve", icon: "Zap", title: "Скоростной клапан ТПА11", desc: "Автоматическое перекрытие при аварийном разрыве трубопровода на АГЗС и ГНС" },
  { href: "/safety-valve", icon: "Shield", title: "Предохранительный клапан ППЦЗ-12", desc: "Защита резервуаров СУГ от превышения давления, аналог REGO" },
  { href: "/components", icon: "Settings", title: "Комплектующие и ЗИП", desc: "Ремонтные комплекты, уплотнения, детали для обслуживания газовой арматуры" },
  { href: "/pump-equipment", icon: "Gauge", title: "Насосное оборудование", desc: "Насосы и агрегаты для перекачки сжиженного углеводородного газа" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>О компании СтальПроКлапан — производство клапанов СУГ с 2020 года</title>
        <meta
          name="description"
          content="СтальПроКлапан — российский производитель клапанов для сжиженного углеводородного газа. Основана в 2020 году в Барнауле. Скоростные клапаны ТПА11, предохранительные ППЦЗ-12, насосное оборудование. 500+ клиентов по всей России."
        />
        <meta name="keywords" content="о компании СтальПроКлапан, производитель клапанов СУГ, Барнаул, ППЦЗ-12, ТПА11, история компании" />
        <meta property="og:title" content="О компании СтальПроКлапан — производство клапанов СУГ с 2020 года" />
        <meta property="og:description" content="Российский производитель клапанов для АГЗС и ГНС. Основана в 2020 году, Барнаул. 500+ клиентов, сертификат EAC." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xn--80awjdfch6f.com/about" />
        <link rel="canonical" href="https://xn--80awjdfch6f.com/about" />
        <script type="application/ld+json">{breadcrumbLd}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-white border-b border-gray-100 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Главная</a>
              <Icon name="ChevronRight" className="h-4 w-4" />
              <span className="text-gray-900">О компании</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">О компании</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Производим и поставляем клапаны для безопасной работы АГЗС и ГНС с&nbsp;2020&nbsp;года
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* История */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="BookOpen" className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Наша история</h2>
            </div>
            <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
              <p>
                Компания <strong className="text-gray-900">СтальПроКлапан</strong> основана в 2020 году в&nbsp;Барнауле (Алтайский край). С первых дней мы специализируемся на производстве и&nbsp;поставке клапанов для систем сжиженного углеводородного газа (СУГ) — оборудования, от надёжности которого напрямую зависит безопасность автогазозаправочных станций и газонаполнительных станций.
              </p>
              <p>
                Основной ассортимент — скоростные отсечные клапаны <strong className="text-gray-900">ТПА11</strong> и предохранительные клапаны <strong className="text-gray-900">ППЦЗ-12</strong>, а также комплектующие и насосное оборудование для АГЗС и ГНС. Наша продукция прошла сертификацию EAC и соответствует требованиям технических регламентов Таможенного союза.
              </p>
              <p>
                За несколько лет работы мы выстроили прямые поставки более чем <strong className="text-gray-900">500 клиентам</strong> по всей России — от Калининграда до Сахалина. Работаем как с крупными газовыми компаниями, так и с небольшими ИП, обслуживающими региональные АГЗС.
              </p>
            </div>
          </div>

          {/* Цифры */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Компания в цифрах</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ icon, label, value, color }) => (
                <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${color}`}>
                    <Icon name={icon as Parameters<typeof Icon>[0]["name"]} className="h-6 w-6" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 leading-tight">{value}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Преимущества */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={icon as Parameters<typeof Icon>[0]["name"]} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Продукция */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Наша продукция</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map(({ href, icon, title, desc }) => (
                <a
                  key={href}
                  href={href}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:border-primary/40 hover:shadow-md transition-all group flex gap-4"
                >
                  <div className="bg-primary/10 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={icon as Parameters<typeof Icon>[0]["name"]} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Готовы к сотрудничеству?</h2>
            <p className="text-white/80 mb-6">Свяжитесь с нами — ответим на вопросы и подберём нужное оборудование</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79609373542"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
                +7 960 937-35-42
              </a>
              <a
                href="/#contacts"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icon name="MessageSquare" className="h-5 w-5" />
                Написать нам
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
