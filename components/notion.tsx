// components/IntergratingNotionCMS.tsx
import { format } from 'date-fns'

function BlogLayout({ title, date, children }: { title: string, date: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">Published on {date}</p>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  )
}

export default function IntegratingNotionCMS() {
  const date = format(new Date('2024-08-30'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Integrating Notion as a CMS for My Blog" date={date}>
      <p>
        Notion is a fantastic tool for note-taking and project management, but it also works well as a headless CMS for 
        websites. Recently, I integrated Notion with my Next.js blog to manage and publish content without needing a 
        separate CMS like WordPress or Contentful.
      </p>
      <h2>Why Use Notion as a CMS?</h2>
      <p>
        Notion offers a simple and intuitive interface for managing content. By using Notion as a headless CMS, I can 
        write and organize my blog posts within Notion, and fetch the data in my Next.js app using the Notion API.
      </p>
      <h2>Key Steps in Integration</h2>
      <ol>
        <li>Set up a Notion database for blog posts, including properties like title, date, and content.</li>
        <li>Use the official Notion API to fetch data from the database.</li>
        <li>Display the blog posts dynamically in my Next.js app.</li>
      </ol>
      <p>
        The integration process was smooth, and it allowed me to build a lightweight and efficient CMS solution using 
        tools I already love.
      </p>
    </BlogLayout>
  )
}
