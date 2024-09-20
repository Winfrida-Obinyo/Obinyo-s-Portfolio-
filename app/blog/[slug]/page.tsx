'use client'
// app/blog/[slug]/page.tsx
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';

// Define the types of the blog post slugs
type BlogPostSlug = 'learning-nextjs-portfolio' | 'understanding-ssr-nextjs' | 'integrating-notion-cms'; 

// Create the BlogPostComponents mapping
const BlogPostComponents: Record<BlogPostSlug, React.ComponentType<{}>> = {
  'learning-nextjs-portfolio': dynamic(() => import('./../../../components/learningnext.jsportfolio')),
  'understanding-ssr-nextjs': dynamic(() => import('./../../../components/serversideRendering')),
  'integrating-notion-cms': dynamic(() => import('./../../../components/notion')),
}

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>(); // Use useParams to get the slug
  
    // Determine the component based on the slug
    const BlogPostComponent = slug && BlogPostComponents[slug as BlogPostSlug];
  
    if (!BlogPostComponent) {
      return <p>Loading...</p>; // Optionally handle the case where the slug is invalid
    }
  
    return <BlogPostComponent />;
  }
