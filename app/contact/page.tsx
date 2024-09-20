'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [visitors, setVisitors] = useState(0)
  const [visitorTimer, setVisitorTimer] = useState(0)

  const onSubmit = async (data) => {
    console.log(data)
    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000
    })
  }

  useEffect(() => {
    setVisitors(Math.floor(Math.random() * 10))
    const interval = setInterval(() => {
      setVisitorTimer(prev => prev + 1)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (visitorTimer % 5 === 0) {
      setVisitors(prev => prev + Math.floor(Math.random() * 5))
    }
  }, [visitorTimer])

  return (
    <div
      className="container mx-auto px-4 py-12 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/image3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form with a background image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white bg-cover bg-center p-8 rounded-lg shadow-lg"
            style={{
                backgroundImage: 'url(/images/image3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
              <div>
                <label htmlFor="name" className="block mb-2 text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-2 border rounded"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full p-2 border rounded"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-white">Message</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full p-2 border rounded"
                  rows={4}
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              </div>
              <button
                type="submit"
                className="bg-[#748A46] text-white px-4 py-2 rounded hover:bg-[#5A6A3E] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information & Visitor Counter with a background image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white bg-cover bg-center p-8 rounded-lg shadow-lg"
            style={{
                backgroundImage: 'url(/images/image3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
              <p className="mb-4 text-white">Feel free to reach out if you have any questions or just want to chat!</p>
              <p className="mb-2 text-white"><strong>Email:</strong> obinyowinfridaa@gmail.com</p>
              <p className="mb-2 text-white"><strong>Location:</strong> Nairobi, Kenya</p>
              <p className="text-white"><strong>Current Visitors:</strong> {visitors}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  )
}
