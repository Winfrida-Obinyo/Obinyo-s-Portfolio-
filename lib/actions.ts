'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from "@/lib/schemas";
import ContactFormEmail from '@/emails/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>


if (!process.env.RESEND_API_KEY) {
  throw  new Error('Missing Resend API key')
}
const resend =  new Resend(process.env.RESEND_API_KEY)

export async function sendEmail (data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'obinyowinfridaa@gmail.com',
      cc: 'ebesteinpr@gmail.com',
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}