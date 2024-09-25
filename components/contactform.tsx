'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred! Please try again.', {
        style: {
          backgroundColor: '#FFB2B2', 
          color: '#B00000', 
        },
      })
      return
    }

    toast.success('Message sent successfully!', {
      style: {
        backgroundColor: '#B2FFB2', 
        color: '#005700', 
      },
    })
    reset()
  }

  return (
    <div
      className="relative py-0 bg-cover bg-center rounded-lg shadow-lg h-96 md:h-[500px] flex justify-center"
      style={{
        backgroundImage: 'url("/images/image3.jpg")'
      }}
    >
      <div className="w-full bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-8 m-4">
        <section className='relative'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                width={200}
                height={200}
                x='50%'
                y={-64}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            />
          </svg>

          <form
            onSubmit={handleSubmit(processForm)}
            className='mt-4'
            noValidate
          >
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <Input
                  id='name'
                  type='text'
                  placeholder='Name'
                  autoComplete='given-name'
                  {...register('name')}
                  className='bg-white bg-opacity-90 text-black'
                />
                {errors.name?.message && (
                  <p className='ml-1 mt-2 text-sm text-rose-400'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type='email'
                  id='email'
                  autoComplete='email'
                  placeholder='Email'
                  {...register('email')}
                  className='bg-white bg-opacity-90 text-black'
                />
                {errors.email?.message && (
                  <p className='ml-1 mt-2 text-sm text-rose-400'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='sm:col-span-2'>
                <Textarea
                  rows={4}
                  placeholder='Message'
                  {...register('message')}
                  className='bg-white bg-opacity-90 text-black'
                />
                {errors.message?.message && (
                  <p className='ml-1 mt-2 text-sm text-rose-400'>
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className='mt-6'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full disabled:opacity-50'
                style={{
                  backgroundColor: '#B2FFB2', 
                  color: '#005700', 
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Contact Us'}
              </Button>
            </div>
            <p className='mt-4 text-xs'>
              By submitting this form, I agree to the{' '}
              <span className='font-bold' style={{ color: '#005700' }}>
                <Link href='/privacyPolicy' className='font-bold'>
                  privacy&nbsp;policy.
                </Link>
              </span>
            </p>
          </form>
        </section>
      </div>
    </div>
  )
}
