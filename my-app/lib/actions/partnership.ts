'use server';

import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const partnershipSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  partnershipType: z.string().min(1, 'Partnership type is required'),
  message: z.string().optional(),
});

export async function submitPartnership(formData: FormData) {
  const rawData = {
    company: formData.get('company'),
    contactPerson: formData.get('contactPerson'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    partnershipType: formData.get('partnershipType'),
    message: formData.get('message'),
  };

  const result = partnershipSchema.safeParse(rawData);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { error: 'Invalid form data', fieldErrors: errors, success: false };
  }

  try {
    // Send notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@hsdf.org.pk',
      subject: 'New Corporate Partnership Inquiry',
      html: `
        <h2>Corporate Partnership Inquiry</h2>
        <p><strong>Company:</strong> ${result.data.company}</p>
        <p><strong>Contact Person:</strong> ${result.data.contactPerson}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Phone:</strong> ${result.data.phone || 'Not provided'}</p>
        <p><strong>Partnership Type:</strong> ${result.data.partnershipType}</p>
        <p><strong>Message:</strong> ${result.data.message || 'No message'}</p>
      `,
    });

    // Send auto-reply to the inquirer
    await sendEmail({
      to: result.data.email,
      subject: 'Thank you for your partnership interest',
      html: `
        <h2>Thank you for reaching out, ${result.data.contactPerson}!</h2>
        <p>We have received your inquiry regarding partnership with HSDF. Our partnerships team will review your request and contact you shortly.</p>
        <p>In the meantime, feel free to explore our website to learn more about our work.</p>
        <p>Best regards,<br>HSDF Partnerships Team</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Partnership submission error:', error);
    return { error: 'Failed to submit. Please try again later.', success: false };
  }
}