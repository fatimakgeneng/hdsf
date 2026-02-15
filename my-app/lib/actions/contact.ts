'use server';

import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function submitContact(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const result = contactSchema.safeParse(rawData);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { error: 'Invalid form data', fieldErrors: errors, success: false };
  }

  try {
    // Send notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@hsdf.org.pk',
      subject: `New Contact Form Message: ${result.data.subject || 'No subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${result.data.name}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Subject:</strong> ${result.data.subject || 'Not provided'}</p>
        <p><strong>Message:</strong> ${result.data.message}</p>
      `,
    });

    // Send auto-reply to the sender
    await sendEmail({
      to: result.data.email,
      subject: 'Thank you for contacting HSDF',
      html: `
        <h2>Thank you, ${result.data.name}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>HSDF Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Contact submission error:', error);
    return { error: 'Failed to submit. Please try again later.', success: false };
  }
}