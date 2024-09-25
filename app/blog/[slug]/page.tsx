'use client'
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';

type BlogPostSlug = 'learning-nextjs-portfolio' | 'understanding-ssr-nextjs' | 'integrating-notion-cms'; 

const BlogPostComponents: Record<BlogPostSlug, React.ComponentType<{}>> = {
  'learning-nextjs-portfolio': dynamic(() => import('./../../../components/learningnext.jsportfolio')),
  'understanding-ssr-nextjs': dynamic(() => import('./../../../components/serversideRendering')),
  'integrating-notion-cms': dynamic(() => import('./../../../components/notion')),
}

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>(); 
  
    const BlogPostComponent = slug && BlogPostComponents[slug as BlogPostSlug];
  
    if (!BlogPostComponent) {
      return <p>Loading...</p>; 
    }
  
    return <BlogPostComponent />;
  }
