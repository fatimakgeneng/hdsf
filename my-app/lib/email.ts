// lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!process.env.SMTP_HOST) {
    console.log('Email sending skipped: SMTP not configured');
    console.log('Would send:', { to, subject, html });
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"HSDF" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html,
    });
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Email send failed:', error);
    throw error; // Re-throw so action knows it failed
  }
}