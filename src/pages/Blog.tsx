import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHead from "@/components/blog/BlogHead";
import BlogList from "@/components/blog/BlogList";
import BlogPostView from "@/components/blog/BlogPost";
import { blogPosts, BlogPost } from "@/components/blog/blogData";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
        {!selectedPost ? (
          <BlogList
            filteredPosts={filteredPosts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectPost={setSelectedPost}
          />
        ) : (
          <BlogPostView
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        )}
      </main>

      <Footer />
    </div>
    </>
  );
}