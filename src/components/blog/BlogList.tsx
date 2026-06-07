import IndustryNews from "@/components/IndustryNews";
import Icon from "@/components/ui/icon";
import { categories, BlogPost } from "./blogData";

interface BlogListProps {
  filteredPosts: BlogPost[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogList({
  filteredPosts,
  selectedCategory,
  onSelectCategory,
  onSelectPost,
}: BlogListProps) {
  return (
    <>
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon name="BookOpen" className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Блог о газовом оборудовании
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Экспертные статьи, практические руководства и новости отрасли
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Новости отрасли */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryNews />
        </div>
      </section>

      {/* Список статей */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Экспертные статьи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <a href={`/blog/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                </a>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('ru-RU')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.author}
                    </span>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                    >
                      Читать далее
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}