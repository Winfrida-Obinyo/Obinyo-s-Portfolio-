import { useRouter } from 'next/router'

const projects = [
  {
    id: 1,
    title: 'Movie Listing Platform',
    description: (
      <>
        <p>This platform allows users to browse and list movies across various genres.</p>
        <p>Users can filter movies by genre, release date, and ratings, making it easy to find their favorite films. The backend is built using Node.js and Express, ensuring reliable server performance, while the front end is crafted with React and Next.js for optimal performance and a smooth user experience.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Animation Movie Platform',
    description: (
      <>
        <p>This platform is dedicated to showcasing animated films, providing an extensive database of animation movies.</p>
        <p>Users can rate and review films, and the platform features a robust search functionality to easily find specific titles. Built with React and a RESTful API, the application allows for efficient data management and a responsive interface.</p>
      </>
    ),
  },
  {
    id: 3,
    title: 'EcoConnect Informational Website',
    description: (
      <>
        <p>EcoConnect serves as an informational hub for waste management solutions, offering articles, resources, and guides on effective waste management practices.</p>
        <p>The design is user-friendly, and it leverages Next.js for fast loading times and SEO optimization, ensuring that users can easily access the information they need.</p>
      </>
    ),
  },
  {
    id: 4,
    title: 'EcoConnect E-commerce Website',
    description: (
      <>
        <p>This e-commerce platform connects waste recyclers with waste collectors, enabling a seamless marketplace for recycling services.</p>
        <p>Users can register, post job offers, and manage transactions securely. The application utilizes Next.js for server-side rendering and Stripe for payment processing, ensuring a smooth and secure user experience.</p>
      </>
    ),
  },
  {
    id: 5,
    title: 'School Portfolio',
    description: (
      <>
        <p>A simple portfolio project created during school, showcasing various web development skills.</p>
        <p>This portfolio highlights projects completed during the academic period, focusing on responsive design and basic JavaScript functionality, demonstrating the progression of my skills over time.</p>
      </>
    ),
  },
  {
    id: 6,
    title: 'Jewela Touring Company Website',
    description: (
      <>
        <p>The website for Jewela Touring Company provides comprehensive information on tours, packages, and bookings.</p>
        <p>Users can view itineraries and make reservations online. Built with Next.js, it incorporates an intuitive booking system that enhances the user experience and streamlines the booking process.</p>
      </>
    ),
  },
  {
    id: 7,
    title: 'Gerar Talents School Website',
    description: (
      <>
        <p>This website is dedicated to Gerar Talents School, offering vital information about courses, faculty, and admissions.</p>
        <p>It features an easy-to-navigate layout and a contact form for inquiries. Built with Next.js, the site ensures a responsive and engaging user experience, making it accessible on various devices.</p>
      </>
    ),
  },
]

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <p>Loading...</p>

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="text-lg leading-relaxed">
        {project.description}
      </div>
      <h2 className="text-2xl font-semibold mt-8">Key Features:</h2>
      <ul className="list-disc list-inside">
        <li>Responsive design for mobile and desktop users.</li>
        <li>User authentication and secure payment options (where applicable).</li>
        <li>Dynamic content management using REST APIs.</li>
        <li>Search and filtering capabilities for better user experience.</li>
      </ul>
    </div>
  )
}
