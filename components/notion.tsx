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

export default function IntegratingNotionCMS() {
  const date = format(new Date('2024-08-30'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Integrating Notion as a CMS for My Blog" date={date}>
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          Notion is a fantastic tool for note-taking and project management, but it also works well as a headless CMS for 
          websites. Recently, I integrated Notion with my Next.js blog to manage and publish content without needing a 
          separate CMS like WordPress or Contentful.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Why Use Notion as a CMS?</h2>
      
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          Notion offers a simple and intuitive interface for managing content. By using Notion as a headless CMS, I can 
          write and organize my blog posts within Notion, and fetch the data in my Next.js app using the Notion API.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Steps in Integration</h2>
      
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <ol className="list-decimal list-inside space-y-2">
          <li>Set up a Notion database for blog posts, including properties like title, date, and content.</li>
          <li>Use the official Notion API to fetch data from the database.</li>
          <li>Display the blog posts dynamically in my Next.js app.</li>
        </ol>
      </div>

      <div className="border border-gray-300 rounded-lg p-4">
        <p>
          The integration process was smooth, and it allowed me to build a lightweight and efficient CMS solution using 
          tools I already love.
        </p>
      </div>
    </BlogLayout>
  )
}
