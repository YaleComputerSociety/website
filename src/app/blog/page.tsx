import { getAllPosts } from '@/lib/blog';
import { BlogIndex } from './BlogIndex';

export default async function BlogPage() {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));

  return <BlogIndex posts={posts} tags={tags} />;
}
