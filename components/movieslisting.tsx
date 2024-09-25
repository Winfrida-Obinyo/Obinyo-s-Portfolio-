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

export default function MovieListingPlatform() {
  return (
    <ProjectLayout title="Movie Listing Platform" imageUrl="/images/movie.jpg">
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p className="text-lg leading-relaxed mb-4">➜ This platform allows users to browse and list movies across various genres, offering a comprehensive database of films ranging from classic hits to the latest releases.</p>

        <p className="text-lg leading-relaxed mb-4">➜ Users can easily search and filter movies by genre, release date, and ratings. Whether they are looking for the top-rated movies or exploring a specific genre like action, drama, or comedy, the platform ensures a user-friendly and intuitive experience. Additionally, the platform provides detailed information on each movie, including cast, director, and user reviews, giving users a deeper insight into the films.</p>

        <p className="text-lg leading-relaxed mb-4">➜ The backend is powered by Node.js and Express, providing a robust and scalable infrastructure capable of handling a large number of requests. For the front end, I utilized React and Next.js, which ensures optimal performance, quick navigation, and server-side rendering to improve SEO and enhance the overall user experience.</p>

        <p className="text-lg leading-relaxed mb-4">➜ Furthermore, users can create accounts to build personalized movie watchlists, rate their favorite films, and leave reviews. The authentication system is secured using JSON Web Tokens (JWT) to protect user data and ensure safe login sessions.</p>

        <p className="text-lg leading-relaxed mb-4">➜ As for the deployment, the platform is hosted on Netlify, and the codebase is publicly available on GitHub. Feel free to explore the source code or check out the live version:</p>

        <ul className="list-none text-center space-y-4 text-lg">
          <li>
            <a href="https://github.com/yourusername/movielistingplatform" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
              <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
              <span style={{ color: '#6A9A2B' }}>GitHub Repository</span>
            </a>
          </li>
          <li>
            <a href="https://quiet-malabi-44dc32.netlify.app/" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
              <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
              <span style={{ color: '#6A9A2B' }}>https://quiet-malabi-44dc32.netlify.app/</span>
            </a>
          </li>
        </ul>
      </div>
    </ProjectLayout>
  );
}
