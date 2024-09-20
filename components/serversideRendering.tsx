// components/UnderstandingSSRNextJs
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

export default function UnderstandingSSRNextJs() {
  const date = format(new Date('2024-09-15'), 'MMMM d, yyyy')

  return (
    <BlogLayout title="Understanding Server-Side Rendering in Next.js" date={date}>
      <p>
        One of the core features of Next.js is Server-Side Rendering (SSR), which enables web pages to be rendered on 
        the server and delivered to the client. SSR improves performance and search engine optimization (SEO), making it 
        a popular choice for building fast, dynamic applications.
      </p>
      <h2>What is SSR?</h2>
      <p>
        SSR allows pages to be rendered on the server on each request, rather than on the client’s browser. This means 
        that when a user visits a page, they get the fully-rendered HTML instead of waiting for JavaScript to execute 
        on their browser.
      </p>
      <h2>Benefits of SSR</h2>
      <ul>
        <li>Improved SEO: Search engines can easily index server-rendered HTML, improving a site's search rankings.</li>
        <li>Faster Time to Interactive: Users can see the content sooner, improving their experience.</li>
        <li>Dynamic Data: SSR is great for pages with frequently changing data, as they are updated on each request.</li>
      </ul>
      <p>
        Learning SSR in Next.js has made me more aware of the power of server-side rendering and how it can enhance web 
        application performance.
      </p>
    </BlogLayout>
  )
}
