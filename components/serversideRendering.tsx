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

export default function UnderstandingSSRNextJs() {
  const date = format(new Date('2024-09-15'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Understanding Server-Side Rendering in Next.js" date={date}>
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          One of the core features of Next.js is Server-Side Rendering (SSR), which enables web pages to be rendered on 
          the server and delivered to the client. SSR improves performance and search engine optimization (SEO), making it 
          a popular choice for building fast, dynamic applications.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">What is SSR?</h2>
      
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <p>
          SSR allows pages to be rendered on the server on each request, rather than on the client’s browser. This means 
          that when a user visits a page, they get the fully-rendered HTML instead of waiting for JavaScript to execute 
          on their browser.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of SSR</h2>
      
      <div className="border border-gray-300 rounded-lg p-4 mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Improved SEO:</strong> Search engines can easily index server-rendered HTML, improving a site's search rankings.</li>
          <li><strong>Faster Time to Interactive:</strong> Users can see the content sooner, improving their experience.</li>
          <li><strong>Dynamic Data:</strong> SSR is great for pages with frequently changing data, as they are updated on each request.</li>
        </ul>
      </div>

      <div className="border border-gray-300 rounded-lg p-4">
        <p>
          Learning SSR in Next.js has made me more aware of the power of server-side rendering and how it can enhance web 
          application performance.
        </p>
      </div>
    </BlogLayout>
  )
}
