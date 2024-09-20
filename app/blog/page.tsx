import { Client } from '@notionhq/client'
import Link from 'next/link'
import { format } from 'date-fns'

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

// Function to get posts from Notion
async function getPosts() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })
    return response.results
  } catch (error) {
    console.error('Error fetching posts from Notion:', error)
    return []
  }
}

// Blog page component
export default async function Blog() {
  const posts = await getPosts()

  // Sample placeholder blogs when no posts are available
  const placeholderBlogs = [
    {
      title: 'Learning Next.js by Creating a Portfolio',
      preview: 'A detailed breakdown of my experience building a portfolio with Next.js and the exciting learning moments along the way.',
      date: new Date(),
      slug: 'learning-nextjs-portfolio',
      href: 'pages/blog/learning-nextjs-portfolio.tsx'
    },
    {
      title: 'Understanding Server-Side Rendering in Next.js',
      preview: 'An introduction to SSR and its benefits in building highly performant web applications with Next.js.',
      date: new Date('2024-09-15'),
      slug: 'understanding-ssr-nextjs',
    },
    {
      title: 'Integrating Notion as a CMS for Your Blog',
      preview: 'Learn how to seamlessly integrate Notion with your Next.js blog as a headless CMS for content management.',
      date: new Date('2024-08-30'),
      slug: 'integrating-notion-cms',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {post.properties.Name.title[0]?.plain_text || 'Untitled'}
                  </h2>
                  <p className="text-gray-600">
                    {post.properties.Preview.rich_text[0]?.plain_text || 'No preview available'}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {post.properties.Date.date?.start
                      ? format(new Date(post.properties.Date.date.start), 'MMMM d, yyyy')
                      : 'Date not available'}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // Show placeholder blogs when no posts are available
          placeholderBlogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600">{blog.preview}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {format(blog.date, 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
