'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageContainer, SectionContainer } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { BlogPostMeta, BlogTag } from '@lib/blog';

interface BlogIndexProps {
  posts: BlogPostMeta[];
  tags: BlogTag[];
}

export function BlogIndex({ posts, tags }: BlogIndexProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', ...tags];
  const filteredPosts =
    selectedTag === 'all'
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag as BlogTag));

  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle
          title="Blog"
          subtitle="Hear the latest updates from our development and executive teams."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;

            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border
          ${
            isActive
              ? 'bg-ycs-pink text-black border-ycs-pink shadow-sm'
              : 'bg-zinc-900/30 text-white/80 border-zinc-700 hover:bg-zinc-800/50 hover:text-white'
          }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            );
          })}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {filteredPosts.map((post, index) => {
            const isNew =
              new Date().getTime() - new Date(post.date).getTime() < 1000 * 60 * 60 * 24 * 14;

            return (
              <motion.div
                key={post.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-zinc-800/40 h-full rounded-xl border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md group flex flex-col">
                    <div className="p-6 flex flex-col flex-1">
                      {isNew && (
                        <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-black bg-ycs-pink rounded-full">
                          New
                        </span>
                      )}
                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-ycs-pink transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 line-clamp-3">{post.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-zinc-700/50 text-white/80 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-white/60 text-sm">
                          <div className="flex items-center gap-2">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-2xl font-semibold mb-2">No posts found</h3>
            <p className="text-white/60">
              Try selecting a different tag or check back later for new content.
            </p>
          </div>
        )}
      </SectionContainer>
    </PageContainer>
  );
}
