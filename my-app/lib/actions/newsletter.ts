'use server';
import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email');
  const result = schema.safeParse({ email });
  if (!result.success) return { error: 'Invalid email' };

  // Just send a notification to admin (or store in a simple text file if you want)
  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'info@hsdf.org.pk',
    subject: 'New Newsletter Subscriber',
    html: `<p>New subscriber: ${result.data.email}</p>`,
  });

  // Optionally send welcome email
  await sendEmail({
    to: result.data.email,
    subject: 'Welcome to HSDF Newsletter',
    html: `<p>Thank you for subscribing to our newsletter!</p>`,
  });

  return { success: true };
}