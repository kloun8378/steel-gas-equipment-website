import { useState } from "react";
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
  );
}
