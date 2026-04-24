import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";

export default function BlogHead() {
  return (
    <>
      <Helmet>
        <title>Блог — клапаны СУГ, АГЗС, ГНС | СтальПроКлапан</title>
        <meta name="description" content="Статьи о скоростных и предохранительных клапанах СУГ: выбор, монтаж, обслуживание ППЦЗ-12, сравнение с REGO RS3132, VENGO, AZT. Технические руководства от СтальПроКлапан." />
        <meta name="keywords" content="блог клапаны СУГ, ППЦЗ-12 обслуживание, скоростной клапан АГЗС, ТПА11-050 характеристики, REGO RS3132 аналог, замена пружины ППЦЗ-12, золотник ППЦЗ-12, арматура ГНС, клапан межфланцевый обзор" />
        <meta property="og:title" content="Блог о клапанах СУГ — СтальПроКлапан" />
        <meta property="og:description" content="Технические статьи о клапанах для АГЗС и ГНС: ППЦЗ-12, ТПА11, сравнения, инструкции по обслуживанию." />
        <meta property="og:url" content="https://xn--80awjdfch6f.com/blog" />
        <link rel="canonical" href="https://xn--80awjdfch6f.com/blog" />
      </Helmet>
      <SEOHead
        title="Блог о газовом оборудовании | СтальПроКлапан"
        description="Полезные статьи о газовой арматуре, клапанах, монтаже, обслуживании и новинках отрасли от экспертов СтальПроКлапан."
      />
    </>
  );
}
