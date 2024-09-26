// app/blog/[slug]/page.tsx

import { format } from 'date-fns';
import Link from 'next/link';

// Placeholder data
const placeholderBlogs: {
  title: string;
  preview: string;
  date: Date;
  slug: string;
}[] = [
  {
    title: 'Learning Next.js by Creating a Portfolio',
    preview: 'A detailed breakdown of my experience building a portfolio with Next.js and the exciting learning moments along the way.',
    date: new Date(),
    slug: 'learning-nextjs-portfolio',
  },
  {
    title: 'Understanding Server-Side Rendering in Next.js',
    preview: 'An introduction to SSR and its benefits in building highly performant web applications with Next.js.',
    date: new Date('2024-09-15'),
    slug: 'understanding-ssr-nextjs',
  },
  {
    title: 'Integrating Notion as a CMS for Your Blog',
    preview: 'Learn how to seamlessly integrate Notion with your Next.js blog as a headless CMS for content management.',
    date: new Date('2024-08-30'),
    slug: 'integrating-notion-cms',
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.preview}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {format(blog.date, 'MMMM d, yyyy')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
