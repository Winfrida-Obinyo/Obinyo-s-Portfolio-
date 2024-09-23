import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Configure email sending (replace placeholders with your details)
      const transporter = nodemailer.createTransport({
        host: 'smtp.obinyowinfridaa@gmail.com',
        port: 587,
        secure: false, // Consider using TLS (true) for security
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail address
          pass: process.env.EMAIL_PASS, // Your Gmail password (or app password)
        },
      });

      // Email options
      const mailOptions = {
        from: email, // Sender's email (user's email)
        to: process.env.RECEIVER_EMAIL, // Your email address to receive notifications
        subject: `New Subscriber: ${email}`,
        text: `You have a new subscriber to your newsletter: ${email}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
      console.error('Error sending subscription notification:', error);
      res.status(500).json({ error: 'Failed to subscribe.' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}