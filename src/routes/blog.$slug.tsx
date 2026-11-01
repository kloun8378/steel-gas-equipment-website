import { createFileRoute, redirect } from "@tanstack/react-router";
import BlogArticle from "@/pages/BlogArticle";
import api from "@/services/api";
import type { BlogPost } from "@/components/blog/blogData";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }): Promise<{ post: BlogPost; related: BlogPost[] }> => {
    let post: BlogPost | undefined;
    try {
      const data = await api.getBlogPost(params.slug);
      post = data.post;
    } catch {
      post = undefined;
    }
    // Как и раньше: несуществующая статья ведёт на список статей.
    if (!post) {
      throw redirect({ to: "/blog", replace: true });
    }
    let related: BlogPost[] = [];
    try {
      const all = await api.getBlogPosts();
      const allPosts: BlogPost[] = all.posts || [];
      const current = post;
      related = allPosts
        .filter((p) => p.id !== current.id && p.category === current.category)
        .slice(0, 3)
        .concat(allPosts.filter((p) => p.id !== current.id && p.category !== current.category))
        .slice(0, 3);
    } catch {
      related = [];
    }
    return { post, related };
  },
  component: BlogArticleRoute,
});

function BlogArticleRoute() {
  const { post, related } = Route.useLoaderData();
  return <BlogArticle post={post} related={related} />;
}
