// // pages/api/subscribe.ts
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email } = req.body

//     // Check if email is provided
//     if (!email || !email.includes('@')) {
//       return res.status(400).json({ error: 'Invalid email address' })
//     }

//     try {
//       // Save the email in the database
//       const subscriber = await prisma.subscriber.create({
//         data: { email },
//       })

//       return res.status(200).json({ success: true, subscriber })
//     } catch (error) {
//       if (error.code === 'P2002') {
//         // Unique constraint error, email already exists
//         return res.status(400).json({ error: 'Email is already subscribed' })
//       }
//       // Handle other errors
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     return res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
