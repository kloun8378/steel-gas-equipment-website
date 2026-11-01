import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

// Адреса вида /path/index.html (из sitemap и внутренних ссылок) ведут на тот же
// адрес без /index.html на конце, остальные неизвестные адреса — настоящий 404.
export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    if (/\/index\.html$/i.test(location.pathname)) {
      const cleanPath = location.pathname.replace(/\/index\.html$/i, "") || "/";
      throw redirect({ href: cleanPath + (location.searchStr || "") + (location.hash ? `#${location.hash}` : ""), statusCode: 301 });
    }
    throw notFound();
  },
  component: () => null,
});
