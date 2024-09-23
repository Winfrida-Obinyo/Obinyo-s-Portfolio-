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

export default function AnimationMovies() {
  return (
    <ProjectLayout title="Animation Movies Platform" imageUrl="/images/animation.jpg">
      {/* Detailed paragraphs */}
      <p className="text-lg leading-relaxed mb-4">➜ This platform is dedicated to showcasing animated films, providing a comprehensive and ever-growing database of animated movies from around the world. Whether you're a fan of classic animations or the latest releases, this platform caters to all tastes in animation.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The platform includes a robust search functionality that allows users to find movies based on title, genre, release year, or even animation studio. You can filter results by ratings, date, or alphabetically to narrow down your choices. This helps users quickly discover films they are interested in.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Each movie entry contains detailed information including the cast, directors, producers, animation studio, and runtime. There’s also a section for user ratings and reviews, where movie lovers can share their thoughts and rate the films they’ve watched. This community-driven feature helps build a solid recommendation system based on user interactions.</p>

      <p className="text-lg leading-relaxed mb-4">➜ The platform also supports user authentication, allowing users to create personal accounts. Once logged in, users can add movies to their watchlist, rate movies, and leave reviews. The authentication system is secured using JSON Web Tokens (JWT), ensuring a safe and secure experience for all users.</p>

      <p className="text-lg leading-relaxed mb-4">➜ Built with a modern stack, the platform uses React for the front end, allowing for smooth user interactions and dynamic updates. The back end is powered by Node.js and Express, ensuring efficient handling of API requests and database management. It is connected to a robust RESTful API that delivers data efficiently to the front end, making the platform highly responsive and user-friendly.</p>

      <p className="text-lg leading-relaxed mb-4">➜ For deployment, the platform is hosted on Netlify for seamless, fast, and scalable web hosting. The codebase is open-source and available on GitHub, inviting developers to contribute to the project or fork it for their own purposes. Feel free to check out the live version or browse the code on GitHub:</p>

      {/* Centered links with icons */}
      <ul className="list-none text-center space-y-4 text-lg">
        <li>
          <a href="Winfrida-Obinyonimation-movies" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faGithub} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>Winfrida-Obinyoanimation movies</span>
          </a>
        </li>
        <li>
          <a href="https://aesthetic-jelly-5b2308.netlify.app/" target="_blank" className="underline flex justify-center items-center space-x-2" style={{ color: '#6A9A2B' }}>
            <FontAwesomeIcon icon={faInternetExplorer} className="text-xl" style={{ color: '#6A9A2B' }} />
            <span>https://aesthetic-jelly-5b2308.netlify.app/</span>
          </a>
        </li>
      </ul>
    </ProjectLayout>
  );
}
