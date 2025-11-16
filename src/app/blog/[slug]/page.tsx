import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { getAllPosts } from '@/lib/blog'; // your existing helper
import { compileMDX } from '@/lib/compileMDX';
import { BlogForm } from '@components/BlogForm'
import { HighFiveButton } from '@components/HighFiveButton';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/assets/posts'));
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), 'src/assets/posts', `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(fileContent);
  const { MDXContent } = await compileMDX(content);

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== params.slug)
    .filter((post) => post.tags.some((tag: string) => data.tags.includes(tag)))
    .slice(0, 5);

  const postKey = params.slug.replace(/[^a-zA-Z]/g, "");

  return (
    <div className="bg-black min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12 max-w-7xl mx-auto px-4 pt-24 pb-32">
        <div className="min-w-0">
          <div className="mb-12">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4">
              {data.title}
            </h1>
            <p className="text-white/70 text-sm">
              {data.author} • {new Date(data.date).toLocaleDateString()} • {data.readTime}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {(data.tags || []).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-zinc-700/50 text-white/80 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <HighFiveButton blogKey={postKey}/>
            </div>
          </div>

          <article className="prose prose-invert max-w-none">
            <MDXContent components={{}} />
          </article>

          <BlogForm/>
        </div>

        <aside className="space-y-6 sticky top-[7.5rem] self-start">
          <h2 className="text-white text-lg font-semibold">More Posts Like This</h2>
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 bg-zinc-800/40 border border-zinc-700 rounded-lg hover:bg-zinc-800/60 transition"
              >
                <h3 className="text-white font-medium text-sm mb-1">{post.title}</h3>
                <p className="text-white/60 text-xs line-clamp-2">{post.description}</p>
              </a>
            ))
          ) : (
            <p className="text-white/50 text-sm">No related posts found.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
