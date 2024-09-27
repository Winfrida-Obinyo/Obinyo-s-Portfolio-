import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

function ProjectLayout({ title, imageUrl, children }: { title: string, imageUrl?: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6A9A2B' }}>
        {title}
      </h1>

      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full max-w-xl max-h-96 object-cover mx-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="prose max-w-none">{children}</div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <ProjectLayout title="Personal Portfolio Platform" imageUrl="/images/portfolio.jpg">
      <p className="text-lg leading-relaxed mb-4">➜ A simple portfolio project created during school, showcasing various web development skills. It serves as a gateway to my development journey, highlighting how far I’ve come in mastering web technologies.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The portfolio demonstrates proficiency in responsive design, utilizing basic HTML and CSS. It showcases several school projects, each aimed at honing my abilities in JavaScript, front-end frameworks, and web design principles.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Over time, I worked on enhancing the functionality of the portfolio, applying lessons learned from practical experiences. This project marks my foundation in web development, especially focusing on clean, accessible code and design.</p>

      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="https://admirable-cendol-764e06.netlify.app/" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>https://admirable-cendol-764e06.netlify.app/</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
