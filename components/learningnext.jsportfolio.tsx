// pages/blog/learning-nextjs-portfolio.tsx
import { format } from 'date-fns'

export default function LearningNextJsPortfolio() {
  const date = format(new Date('2024-09-20'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Learning Next.js by Creating My Portfolio" date={date}>
      <p>
        Next.js is a powerful React framework that enables server-side rendering, static site generation, and other 
        advanced features out of the box. Recently, I decided to create my portfolio using Next.js, and the learning 
        experience has been incredible.
      </p>
      <h2>What I Learned</h2>
      <p>
        Building my portfolio using Next.js helped me deepen my understanding of React concepts while introducing me 
        to the additional features Next.js offers, such as:
      </p>
      <ul>
        <li>Routing: Next.js provides file-based routing, making it super easy to create new pages without extra configuration.</li>
        <li>Server-Side Rendering (SSR): I learned how to dynamically render pages on the server, which improved SEO and performance.</li>
        <li>Static Site Generation (SSG): I used SSG for sections of my portfolio that don’t change frequently, resulting in faster page loads.</li>
        <li>API Routes: I built custom API routes to handle form submissions directly within my Next.js app.</li>
      </ul>
      <p>
        Overall, learning Next.js has transformed how I think about building modern web applications. The integration 
        with tools like TailwindCSS, and the ability to easily deploy using Vercel, made the process enjoyable.
      </p>
    </BlogLayout>
  )
}
