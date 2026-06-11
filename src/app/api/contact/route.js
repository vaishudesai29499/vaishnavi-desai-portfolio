// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// const validate = (data) => {
//   const { name, email, message } = data || {};
//   if (!name || !email || !message) return false;
//   // basic email regex
//   const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//   return re.test(email) && message.trim().length >= 5 && name.trim().length >= 2;
// };

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     if (!validate(body)) {
//       return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
//     }

//     // Read SMTP config from env
//     const SMTP_HOST = process.env.SMTP_HOST;
//     const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
//     const SMTP_USER = process.env.SMTP_USER;
//     const SMTP_PASS = process.env.SMTP_PASS;
//     const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER;
//     const EMAIL_TO = process.env.EMAIL_TO;

//     if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
//       return NextResponse.json({ error: 'Mail server not configured' }, { status: 500 });
//     }

//     const transporter = nodemailer.createTransport({
//       host: SMTP_HOST,
//       port: SMTP_PORT,
//       secure: SMTP_PORT === 465, // true for 465, false for other ports
//       auth: {
//         user: SMTP_USER,
//         pass: SMTP_PASS,
//       },
//     });

//     const { name, email, message } = body;

//     const mailOptions = {
//       from: EMAIL_FROM,
//       to: EMAIL_TO,
//       subject: `New message from portfolio: ${name}`,
//       replyTo: email,
//       html: `
//         <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; color:#111827">
//           <h2>New message from your portfolio</h2>
//           <p><strong>Name:</strong> ${escapeHtml(name)}</p>
//           <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
//           <p><strong>Message:</strong></p>
//           <div style="white-space:pre-wrap; padding:10px; background:#f3f4f6; border-radius:6px">${escapeHtml(message)}</div>
//           <hr />
//           <p style="font-size:12px;color:#6b7280">Sent from your portfolio contact form</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ ok: true });
//   } catch (err) {
//     console.error('Contact API error', err);
//     return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
//   }
// }

// function escapeHtml(str) {
//   if (!str) return '';
//   return String(str)
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#039;');
// }

// export const runtime = 'edge';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Mail to you
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact Request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h3>Message</h3>

          <div style="
            background:#f8fafc;
            padding:15px;
            border-left:4px solid #06b6d4;
          ">
            ${message.replace(/\n/g, '<br>')}
          </div>

          <br/>

          <p>
            Reply directly to:
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>
        </div>
      `,
      replyTo: email,
    });

    // Auto reply to visitor
    await transporter.sendMail({
      from: `"Vaishnavi Desai" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <div style="
          font-family:Arial,sans-serif;
          max-width:600px;
          margin:auto;
          padding:20px;
        ">
          <h2>Thank You ${name}! 👋</h2>

          <p>
            I have received your message and will
            review it shortly.
          </p>

          <p>
            I usually respond within
            <strong>24 hours</strong>.
          </p>

          <hr/>

          <h4>Your Message</h4>

          <p>
            ${message.replace(/\n/g, '<br>')}
          </p>

          <br/>

          <p>
            Regards,<br/>
            <strong>Vaishnavi Desai</strong><br/>
            Full Stack Developer
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: 'Email sent successfully',
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}