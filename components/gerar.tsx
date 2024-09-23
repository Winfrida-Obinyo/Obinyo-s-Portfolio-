import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

function ProjectLayout({ title, imageUrl, children }: { title: string, imageUrl?: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Center the header and add deeper green color */}
      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6A9A2B' }}>
        {title}
      </h1>

      {/* Display Image below the header if available */}
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

export default function MelaPlatform() {
  return (
    <ProjectLayout title="Mela International School Platform" imageUrl="/images/school.jpg">
      {/* Detailed paragraphs */}
      <p className="text-lg leading-relaxed mb-4">➜ This website is dedicated to Mela International School, offering vital information about courses, faculty, and admissions.</p>

      <p className="text-lg leading-relaxed mb-4">➜ It features an easy-to-navigate layout and a contact form for inquiries. Built with React, the site ensures a responsive and engaging user experience, making it accessible on various devices.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Users can find detailed descriptions of courses, faculty profiles, and the admissions process, facilitating informed decisions for prospective students.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The design is focused on usability, ensuring that visitors can easily find the information they need without any hassle.</p>

      {/* Centered links with icons */}
      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="https://github.com/yourusername/melainternationalschool" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>GitHub Repository</span>
          </a>
        </li>
        <li>
          <a href="https://melainternationalschool.netlify.app" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>Live Demo on Netlify</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
