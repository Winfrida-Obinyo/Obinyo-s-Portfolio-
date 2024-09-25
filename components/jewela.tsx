import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

function ProjectLayout({ title, imageUrl, children }: { title: string, imageUrl?: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6A9A2B' }}>
        {title}
      </h1>

      {imageUrl && (
        <div className="mb-6">
          <img
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

export default function Jewela() {
  return (
    <ProjectLayout title="Jewela Touring Company Platform" imageUrl="/images/touring.jpg">
      <p className="text-lg leading-relaxed mb-4">➜ The website for Jewela Touring Company provides comprehensive information on tours, packages, and bookings. It aims to offer travelers a seamless way to plan their adventures.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Users can view itineraries, explore various travel packages, and make reservations online. The site features an intuitive interface that helps users easily navigate through different options.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Built with React and Next.js, it incorporates a dynamic booking system that enhances the user experience, ensuring that bookings are straightforward and efficient. The responsive design allows users to access the platform from any device.</p>

      <p className="text-lg leading-relaxed mb-4">➜ This project showcases my ability to create functional and engaging web applications using modern web technologies.</p>

      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="https://github.com/yourusername/jewelatouringcompany" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>GitHub Repository</span>
          </a>
        </li>
        <li>
          <a href="https://jewelavacations.com" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>jewelavacations.com</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
