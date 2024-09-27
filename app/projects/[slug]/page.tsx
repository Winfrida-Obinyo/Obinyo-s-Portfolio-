'use client';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

type ProjectPostSlug = 'movie-lists' | 'animation-lists' | 'ecoconnectInformational-lists' | 'ecoconnectECommerce-lists' | 'portfolio-lists' | 'jewela-lists' | 'gerar-lists'; 

// Change the empty object type to object
const ProjectPostComponents: Record<ProjectPostSlug, React.ComponentType<object>> = {
  'movie-lists': dynamic(() => import('./../../../components/movieslisting')),
  'animation-lists': dynamic(() => import('./../../../components/animation')),
  'ecoconnectInformational-lists': dynamic(() => import('./../../../components/ecoconnectinformationalweb')),
  'ecoconnectECommerce-lists': dynamic(() => import('./../../../components/ecoconnectCommerce')),
  'portfolio-lists': dynamic(() => import('./../../../components/personalportfolio')),
  'jewela-lists': dynamic(() => import('./../../../components/jewela')),
  'gerar-lists': dynamic(() => import('./../../../components/gerar')),
};

export default function ProjectPostPage() {
    const params = useParams(); 
    const slug = params?.slug;

    const ProjectPostComponent = slug && ProjectPostComponents[slug as ProjectPostSlug];

    if (!ProjectPostComponent) {
      return <p>Loading...</p>; 
    }

    return <ProjectPostComponent />;
}
