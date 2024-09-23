// import { Resend } from 'resend';

// const resend = new Resend('re_jMVG2wEn_6Zk1RcRru9F71Ry5hwBqgFRx');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'obinyowinfridaa@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });










// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     try {
//       // Create transporter using your Gmail account (or any other email service)
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USER, // Ensure this is set in your environment variables
//           pass: process.env.EMAIL_PASS, // Ensure this is set in your environment variables
//         },
//         secure: true, // Use SSL/TLS
//       });

//       // Mail options
//       const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_USER, // The recipient (your email)
//         subject: `New message from ${name}`,
//         text: message,
//       };

//       // Send email
//       await transporter.sendMail(mailOptions);

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: error.message || 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
