'use server';
import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  bloodGroup: z.string().min(1),
  location: z.string().optional(),
});

export async function submitBloodDrive(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    bloodGroup: formData.get('bloodGroup'),
    location: formData.get('location'),
  };

  const result = schema.safeParse(rawData);
  if (!result.success) return { error: 'Invalid data', success: false };

  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'info@hsdf.org.pk',
    subject: 'New Blood Drive Registration',
    html: `...`, // build HTML
  });

  return { success: true };
}