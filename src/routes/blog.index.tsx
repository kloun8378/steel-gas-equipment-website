import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import api from "@/services/api";
import type { BlogPost } from "@/components/blog/blogData";

export const Route = createFileRoute("/blog/")({
  loader: async (): Promise<{ posts: BlogPost[] | null }> => {
    try {
      const data = await api.getBlogPosts();
      return { posts: (data.posts || []) as BlogPost[] };
    } catch {
      return { posts: [] };
    }
  },
  component: BlogRoute,
});

function BlogRoute() {
  const { posts } = Route.useLoaderData();
  return <Blog posts={posts} />;
}
