'use client'
// app/project/[slug]/page.tsx
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';

// Define the types of the Project post slugs
type ProjectPostSlug = 'movie-lists' | 'animation-lists' ; 

// Create the ProjectPostComponent mapping
const ProjectPostComponents: Record<ProjectPostSlug, React.ComponentType<{}>> = {
  'movie-lists': dynamic(() => import('./../../../components/movieslisting')),
  'animation-lists': dynamic(() => import('./../../../components/animation')),
}

export default function ProjectPostPage() {
    const { slug } = useParams<{ slug: string }>(); // Use useParams to get the slug
  
    // Determine the component based on the slug
    const ProjectPostComponent = slug && ProjectPostComponents[slug as ProjectPostSlug];
  
    if (!ProjectPostComponent) {
      return <p>Loading...</p>; // Optionally handle the case where the slug is invalid
    }
  
    return <ProjectPostComponent />;
  }