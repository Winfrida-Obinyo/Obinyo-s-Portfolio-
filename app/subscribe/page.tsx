'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

// Define the form data interface
interface NewsletterFormData {
  email: string;
}

export default function Newsletter() {
  // Use the defined interface for form data
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: NewsletterFormData) => {  // Specify type for the form data
    setLoading(true)

    // Send email to the API route
    const res = await fetch('/api/subscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }), // Pass email data to API route
    })

    const result = await res.json()

    // Handle the response from the API
    if (result.error) {
      toast.error(result.error, {
        position: 'top-right',
        autoClose: 3000,
      })
    } else {
      toast.success('Subscribed successfully!', {
        position: 'top-right',
        autoClose: 3000,
      })
      reset() // Reset form on successful submission
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Subscribe to my Newsletter</h2>
        <p className="text-lg">Get updates on my latest work and projects.</p>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white bg-[#748A46] rounded-lg hover:bg-[#5A6A3E] transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            By submitting this form, I agree to the <Link href="/privacyPolicy" className="text-[#748A46] underline">privacy policy</Link>.
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  )
}
