import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
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

export default function EcoconnectPlatform() {
  return (
    <ProjectLayout title="EcoConnect E-Commerce Platform" imageUrl="/images/ecoconnect1.jpg">
      <p className="text-lg leading-relaxed mb-4">➜ This e-commerce platform connects waste recyclers with waste collectors, creating a seamless marketplace where recycling services are easily accessible. By fostering this connection, the platform promotes sustainable waste management solutions.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The platform allows users to register as recyclers or waste collectors. Recyclers can post job offers, while collectors can bid on these jobs, providing flexibility and opportunities for all participants. Users can securely manage their transactions and communicate through the platform.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Built using Next.js, the platform takes advantage of server-side rendering to enhance SEO and provide fast page load times. This ensures an optimal user experience, regardless of device or location. The platform is also integrated with Stripe for secure payment processing, offering both users and service providers a smooth transaction experience.</p>

      <p className="text-lg leading-relaxed mb-4">➜ EcoConnect ensures that all transactions and user data are securely processed and stored. The platform’s interface is designed to be intuitive, helping users easily post and respond to jobs, while the backend efficiently handles job listings and user authentication.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The platform is hosted on Netlify, ensuring high availability and scalability. Feel free to explore the source code or check out the live demo of the platform through the links below:</p>

      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="https://github.com/yourusername/ecoconnectecommerce" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>GitHub Repository</span>
          </a>
        </li>
        <li>
          <a href="https://ecoconnectecommerce.netlify.app" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>Live Demo on Netlify</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
