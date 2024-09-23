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

export default function EcoConnectInformationalPlatform() {
  return (
    <ProjectLayout title="EcoConnect Informational Platform" imageUrl="/images/ecoconnect3.jpg">
      {/* Detailed paragraphs */}
      <p className="text-lg leading-relaxed mb-4">➜ EcoConnect serves as an informational hub for waste management solutions, offering a wide range of articles, resources, and guides on effective waste management practices. The platform empowers individuals and organizations to adopt sustainable waste management strategies.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The website is designed to be user-friendly, ensuring that visitors can easily navigate through various sections, such as recycling tips, upcycling ideas, and waste reduction methods. The content is continuously updated with the latest industry trends and practices, helping users stay informed.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Built with React and Next.js, the platform benefits from server-side rendering, fast loading times, and superior SEO optimization. This ensures that users can quickly access the information they need, while also boosting the platform’s visibility on search engines.</p>

      <p className="text-lg leading-relaxed mb-4">➜ In addition to static content, the platform includes interactive tools like a waste calculator, helping users estimate their waste footprint. Users can also sign up for newsletters and updates, ensuring they are informed about new developments in the world of waste management.</p>

      {/* Centered links with icons */}
      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="https://github.com/yourusername/ecoconnect" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>GitHub Repository</span>
          </a>
        </li>
        <li>
          <a href="https://splendorous-brioche-fc9806.netlify.app/" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>https://splendorous-brioche-fc9806.netlify.app/</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
