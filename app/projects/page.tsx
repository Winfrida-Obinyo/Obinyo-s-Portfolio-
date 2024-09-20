'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Fuse from 'fuse.js'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const projects = [
  { id: 1, title: 'E-commerce Platform', image: '/placeholder.svg?height=300&width=300', description: 'A full-stack e-commerce solution built with Next.js and Stripe.' },
  { id: 2, title: 'Social Media Dashboard', image: '/placeholder.svg?height=300&width=300', description: 'A responsive dashboard for social media analytics using React and D3.js.' },
  { id: 3, title: 'AI-powered Chatbot', image: '/placeholder.svg?height=300&width=300', description: 'An intelligent chatbot built with Python and integrated with GPT-3.' },
]

const fuse = new Fuse(projects, {
  keys: ['title', 'description'],
  threshold: 0.3,
})

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filteredProjects = searchTerm
    ? fuse.search(searchTerm).map(result => result.item)
    : projects

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/images5.jpg)', // Replace with your background image path
      }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center text-white z-10">My Projects</h1>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-10 z-10">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full max-w-lg p-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              />
              <div className="p-6">
                {/* Project Title */}
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox for Image Preview */}
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={projects.map(project => ({ src: project.image }))}
        />
      </div>
    </div>
  )
}
