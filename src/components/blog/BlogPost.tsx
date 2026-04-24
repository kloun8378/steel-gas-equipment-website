import Icon from "@/components/ui/icon";
import { BlogPost as BlogPostType } from "./blogData";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  return (
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
          </div>
        </article>
      </div>
    </section>
  );
}
