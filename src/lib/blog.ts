import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPostMeta {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: BlogTag[];
  type: 'news' | 'tech';
  readTime: string;
  slug: string;
}

export enum BlogTag {
  FEATURE_BREAKDOWN = 'Feature Breakdown',
  RELEASE_NOTE = 'Release Note',
  TUTORIAL = 'Tutorial',
  NEWS_ARTICLE = 'News Article',
  ANNOUNCEMENT = 'Announcement',
  COURSETABLE = 'Course Table',
  YALIES = 'Yalies',
  YMEETS = 'ymeets',
  YALECLUBS = 'Yale Clubs',
  MAJORAUDIT = 'Major Audit',
  YLABS = 'ylabs',
}

const postsDirectory = path.join(process.cwd(), 'src/assets/posts');

export function getAllPosts(): BlogPostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: slug,
        title: data.title,
        description: data.description,
        author: data.author,
        date: data.date,
        tags: data.tags || [],
        type: data.type || 'tech',
        readTime: data.readTime || calculateReadTime(content),
        slug,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}
