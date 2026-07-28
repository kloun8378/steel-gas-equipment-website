import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHead from "@/components/blog/BlogHead";
import BlogList from "@/components/blog/BlogList";
import BlogPostView from "@/components/blog/BlogPost";
import { BlogPost, defaultCategories } from "@/components/blog/blogData";
import api from "@/services/api";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    api.getBlogPosts()
      .then((data) => {
        const posts: BlogPost[] = data.posts || [];
        setBlogPosts(posts);
        setCategories(["Все", ...Array.from(new Set(posts.map((p) => p.category)))]);
      })
      .catch(() => setBlogPosts([]))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = selectedCategory === "Все"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
    <Helmet>
      <title>Блог о газовом оборудовании СУГ — СтальПроКлапан, Барнаул</title>
      <meta name="description" content="Статьи и новости о клапанах СУГ, АГЗС, ГНС. Техническая информация о ППЦЗ-12, ТПА11, насосном оборудовании. Советы по эксплуатации и обслуживанию от СтальПроКлапан." />
      <meta name="keywords" content="блог клапаны СУГ, статьи ППЦЗ-12, техническая информация газовое оборудование, АГЗС ГНС, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Блог о газовом оборудовании — СтальПроКлапан" />
      <meta property="og:description" content="Технические статьи и новости о клапанах и оборудовании для СУГ." />
      <meta property="og:url" content="https://xn--80awjdfch6f.com/blog" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg" />
      <meta property="og:image:alt" content="СтальПроКлапан — блог о газовом оборудовании" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg" />
      <link rel="canonical" href="https://xn--80awjdfch6f.com/blog" />
    </Helmet>
    <div className="min-h-screen flex flex-col">
      <BlogHead />
      <Header />

      <main className="flex-1">
        {isLoading ? (
          <div className="py-24 text-center text-gray-500">Загрузка статей...</div>
        ) : !selectedPost ? (
          <BlogList
            filteredPosts={filteredPosts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectPost={setSelectedPost}
            categories={categories}
          />
        ) : (
          <BlogPostView
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
            allPosts={blogPosts}
            onSelectPost={setSelectedPost}
          />
        )}
      </main>

      <Footer />
    </div>
    </>
  );
}
