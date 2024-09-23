import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Log the received data
    console.log('Received data:', req.body);

    // Set up your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Change this if using a different service
      port: 587, // Use 465 for SSL, 587 for TLS
      secure: false, // Set to true if using port 465
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Receiver's email
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ message: 'Message failed to send.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
