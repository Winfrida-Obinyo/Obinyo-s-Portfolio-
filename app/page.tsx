'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Social icons
import { SiX } from 'react-icons/si'; // Import X icon

export default function Home() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container to take full height */}
      
      {/* Main Content */}
      <div
        className="flex-grow flex flex-col justify-center items-center p-4 relative"
        style={{
          backgroundImage: `url('/images/image3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* This will cover the entire page */}
        
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10" // Ensure content is above overlay
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-[#BAD59E]">
            {greeting}, Winfrida Obinyo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#BAD59E]">
            Software Engineer | Web Development Enthusiast
          </p>
          <Link
            href="/projects"
            className="bg-[#748A46] text-white px-8 py-3 rounded-full hover:bg-[#5A6A3E] transition duration-300 shadow-lg transform hover:scale-105 text-lg"
          >
            View My Projects
          </Link>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative mt-16 text-center w-full z-10" // Ensure content is above overlay
        >
          <h2 className="text-4xl font-bold mb-6 text-[#BAD59E]">Key Skills</h2>
          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 space-y-6 sm:space-y-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-semibold text-[#BAD59E]">JavaScript</h3>
              <p className="text-sm text-gray-400">Proficiency: 90%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-semibold text-[#BAD59E]">React</h3>
              <p className="text-sm text-gray-400">Proficiency: 85%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-semibold text-[#BAD59E]">Next.js</h3>
              <p className="text-sm text-gray-400">Proficiency: 80%</p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative mt-12 text-center z-10" // Ensure content is above overlay
        >
          <h2 className="text-3xl font-bold mb-6 text-[#BAD59E]">Connect with Me</h2>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://github.com"
              className="text-3xl text-[#BAD59E] hover:text-white transition duration-300 p-2 bg-gray-800 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="text-3xl text-[#BAD59E] hover:text-white transition duration-300 p-2 bg-gray-800 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com" // Update to link for X
              className="text-3xl text-[#BAD59E] hover:text-white transition duration-300 p-2 bg-gray-800 rounded-full"
            >
              <SiX />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      {/* Uncomment the footer component if you're using it */}
      {/* <Footer /> */}

    </div>
  )
}
