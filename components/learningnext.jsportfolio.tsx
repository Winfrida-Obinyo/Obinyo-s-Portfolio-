// components/learning-nextjs-portfolio.tsx
import { format } from 'date-fns'

function BlogLayout({ title, date, children }: { title: string, date: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-lg max-w-3xl mt-8">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{title}</h1>
      <p className="text-sm text-gray-500 mb-8 italic">Published on {date}</p>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  )
}

export default function LearningNextJsPortfolio() {
  const date = format(new Date('2024-09-20'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Learning Next.js by Creating My Portfolio" date={date}>
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          Next.js is a powerful React framework that enables server-side rendering, static site generation, and other 
          advanced features out of the box. Recently, I decided to create my portfolio using Next.js, and the learning 
          experience has been incredible.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">What I Learned</h2>

      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          Building my portfolio using Next.js helped me deepen my understanding of React concepts while introducing me 
          to the additional features Next.js offers, such as:
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Routing:</strong> Next.js provides file-based routing, making it super easy to create new pages without extra configuration.</li>
          <li><strong>Server-Side Rendering (SSR):</strong> I learned how to dynamically render pages on the server, which improved SEO and performance.</li>
          <li><strong>Static Site Generation (SSG):</strong> I used SSG for sections of my portfolio that don’t change frequently, resulting in faster page loads.</li>
          <li><strong>API Routes:</strong> I built custom API routes to handle form submissions directly within my Next.js app.</li>
        </ul>
      </div>

      <div className="border border-gray-300 rounded-lg p-4">
        <p>
          Overall, learning Next.js has transformed how I think about building modern web applications. The integration 
          with tools like TailwindCSS, and the ability to easily deploy using Vercel, made the process enjoyable.
        </p>
      </div>
    </BlogLayout>
  )
}
