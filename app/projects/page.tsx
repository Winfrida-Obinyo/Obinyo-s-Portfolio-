'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Fuse from 'fuse.js'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Link from 'next/link'

const projects = [
  { 
    id: 1,
    title: 'Movie Listing Platform', 
    image: '/images/movie.jpg', 
    description: 'A platform for listing movies of any genre.', 
    slug: 'movie-lists'
  },
  { 
    id: 2,
    title: 'Animation Movie Platform', 
    image: '/images/animation.jpg', 
    description: 'A dedicated platform for animation movies.',
    slug: 'animation-lists'
  },
  { 
    id: 3,
    title: 'EcoConnect Informational Website', 
    image: '/images/ecoconnect3.jpg', 
    description: 'An informational website about the EcoConnect waste management solution.',
    slug: 'ecoconnectInformational-lists' 
  },
  { 
    id: 4,
    title: 'EcoConnect E-commerce Website', 
    image: '/images/ecoconnect1.jpg', 
    description: 'An e-commerce platform connecting waste recyclers and waste collectors.',
    slug: 'ecoconnectECommerce-lists'
  },
  { 
    id: 5,
    title: 'Personal Portfolio', 
    image: '/images/portfolio.jpg', 
    description: 'A simple portfolio project created during school.',
    slug: 'portfolio-lists' 
  },
  { 
    id: 6,
    title: 'Jewela Touring Company Website', 
    image: '/images/touring.jpg', 
    description: 'A website for a touring company named Jewela.',
    slug: 'jewela-lists' 
  },
  { 
    id: 7,
    title: 'Mela International School Website', 
    image: '/images/school.jpg', 
    description: 'A website for Mela international School.',
    slug: 'gerar-lists' 
  },
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
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: 'url(/images/images5.jpg)', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white z-10">My Projects</h1>
        
        <div className="flex justify-center mb-10 z-10">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full max-w-lg p-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                />
                <div className="p-4 flex-grow"> 
                  <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
