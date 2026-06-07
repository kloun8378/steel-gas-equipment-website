import { Helmet } from "react-helmet-async";
import Icon from "@/components/ui/icon";
import { BlogPost as BlogPostType } from "./blogData";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  allPosts: BlogPostType[];
  onSelectPost: (post: BlogPostType) => void;
}

export default function BlogPost({ post, onBack, allPosts, onSelectPost }: BlogPostProps) {
  const related = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)
    .concat(allPosts.filter(p => p.id !== post.id && p.category !== post.category))
    .slice(0, 3);

  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "СтальПроКлапан",
      "url": "https://xn--80awjdfch6f.com"
    }
  });

  return (
    <>
      <Helmet>
        <title>{post.title} — СтальПроКлапан</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} — СтальПроКлапан`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{ldJson}</script>
      </Helmet>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="mb-8 text-primary hover:text-primary/80 flex items-center gap-2"
          >
            <Icon name="ArrowLeft" className="h-4 w-4" />
            Назад к статьям
          </button>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('ru-RU')}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{post.author}</span>
              </div>

              <h1 className="text-3xl font-bold mb-6 text-gray-900">
                {post.title}
              </h1>

              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {related.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Читайте также</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map(p => (
                      <button
                        key={p.id}
                        onClick={() => onSelectPost(p)}
                        className="text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors"
                      >
                        <span className="text-xs text-primary font-medium">{p.category}</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">{p.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
