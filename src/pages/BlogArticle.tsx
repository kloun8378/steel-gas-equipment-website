import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { blogPosts } from "@/components/blog/blogData";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    navigate("/blog", { replace: true });
    return null;
  }

  const related = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)
    .concat(blogPosts.filter(p => p.id !== post.id && p.category !== post.category))
    .slice(0, 3);

  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "url": `https://xn--80awjdfch6f.com/blog/${post.slug}`,
    "author": { "@type": "Person", "name": post.author },
    "publisher": {
      "@type": "Organization",
      "name": "СтальПроКлапан",
      "url": "https://xn--80awjdfch6f.com",
      "logo": { "@type": "ImageObject", "url": "https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg" }
    }
  });

  const breadcrumbLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/" },
      { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://xn--80awjdfch6f.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://xn--80awjdfch6f.com/blog/${post.slug}` }
    ]
  });

  return (
    <>
      <Helmet>
        <title>{post.title} — СтальПроКлапан</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`https://xn--80awjdfch6f.com/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} — СтальПроКлапан`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://xn--80awjdfch6f.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">{ldJson}</script>
        <script type="application/ld+json">{breadcrumbLd}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary transition-colors">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/blog" className="hover:text-primary transition-colors">Блог</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700 line-clamp-1">{post.title}</span>
          </nav>

          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(post.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="text-gray-400 text-sm">• {post.author}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed border-l-4 border-primary/30 pl-4">
                {post.excerpt}
              </p>

              <div className="prose prose-gray max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-xl font-bold mt-8 mb-3 text-gray-900">
                        {paragraph.slice(2, -2)}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('| ')) {
                    const rows = paragraph.split('\n').filter(r => !r.match(/^\|[-| ]+\|$/));
                    return (
                      <div key={index} className="overflow-x-auto my-4">
                        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                          {rows.map((row, ri) => {
                            const cells = row.split('|').filter(c => c.trim());
                            return (
                              <tr key={ri} className={ri === 0 ? 'bg-gray-50 font-semibold' : 'border-t border-gray-100'}>
                                {cells.map((cell, ci) => (
                                  <td key={ci} className="px-4 py-2 border-r border-gray-100 last:border-r-0">{cell.trim()}</td>
                                ))}
                              </tr>
                            );
                          })}
                        </table>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Читайте также */}
              {related.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Читайте также</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map(p => (
                      <a
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="text-left bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-xl p-4 transition-colors"
                      >
                        <span className="text-xs text-primary font-medium">{p.category}</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">{p.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-10 bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Нужна консультация по клапанам?</p>
                  <p className="text-sm text-gray-600 mt-1">Ответим на вопросы и подберём оборудование под ваш объект</p>
                </div>
                <a
                  href="tel:+79609373542"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  <Icon name="Phone" className="h-4 w-4" />
                  Позвонить
                </a>
              </div>
            </div>
          </article>

          <div className="mt-6">
            <a href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
              <Icon name="ArrowLeft" className="h-4 w-4" />
              Все статьи
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
