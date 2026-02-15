// lib/actions/volunteer.ts
'use server';

import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const volunteerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().optional(),
});

export async function submitVolunteer(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    interest: formData.get('interest'),
    message: formData.get('message'),
  };

  const result = volunteerSchema.safeParse(rawData);
  if (!result.success) {
    return { error: 'Invalid form data', success: false };
  }

  try {
    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@hsdf.org.pk',
      subject: 'New Volunteer Submission',
      html: `
        <h2>New Volunteer</h2>
        <p><strong>Name:</strong> ${result.data.name}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Phone:</strong> ${result.data.phone || 'Not provided'}</p>
        <p><strong>Area of Interest:</strong> ${result.data.interest}</p>
        <p><strong>Message:</strong> ${result.data.message || 'No message'}</p>
      `,
    });

    // Optionally send auto-reply to volunteer
    await sendEmail({
      to: result.data.email,
      subject: 'Thank you for volunteering with HSDF',
      html: `
        <h2>Thank You, ${result.data.name}!</h2>
        <p>We appreciate your interest in volunteering. Our team will contact you soon.</p>
        <p>Best regards,<br>HSDF Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Volunteer submission error:', error);
    return { error: 'Failed to submit. Please try again.', success: false };
  }
}