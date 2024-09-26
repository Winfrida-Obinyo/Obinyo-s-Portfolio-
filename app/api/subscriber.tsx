// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validate email (basic validation, you can expand this)
    if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      // Create a new subscriber
      const subscriber = await prisma.subscriber.create({
        data: { email },
      });
      return res.status(201).json(subscriber);
    } catch (error) {
      return res.status(500).json({ error: 'Error subscribing, please try again' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
