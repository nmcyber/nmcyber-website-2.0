// Contact form submission service
import { Prisma } from '@prisma/client';
import { config } from '../config';
import { prisma } from '../lib/prisma';
import { encryptEmail, hashEmail } from '../utils/crypto';
import { addMinutesUTC, getCurrentUTCDate } from '../utils/dates';
import { BadRequestError, RateLimitError } from '../utils/http-errors';
import { sendEmail } from './email-service';
import { getRejectionReason, shouldRejectEmail, validateEmail } from './email-validation-service';

export type CreateContactRequestInput = {
  name: string;
  email: string;
  company?: string;
  employeeCount?: number;
  message?: string;
  requestIp?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
};

export type CreateContactRequestResult = {
  contactId: string;
  status: 'success';
  message: string;
};

export async function createContactRequest({
  name,
  email,
  company,
  employeeCount,
  message,
  requestIp,
  userAgent,
  metadata,
}: CreateContactRequestInput): Promise<CreateContactRequestResult> {
  // Validate email
  const emailValidation = await validateEmail(email);

  if (shouldRejectEmail(emailValidation)) {
    throw new BadRequestError(getRejectionReason(emailValidation) || 'Invalid email address');
  }

  // Rate limiting: Check if same email has submitted too many requests recently
  const emailHash = hashEmail(email);
  const windowStart = addMinutesUTC(getCurrentUTCDate(), -config.REQUEST_WINDOW_MINUTES);
  const existingCount = await prisma.contactRequest.count({
    where: {
      emailHash,
      createdAt: {
        gte: windowStart,
      },
    },
  });

  if (existingCount >= config.MAX_REQUESTS_PER_WINDOW) {
    throw new RateLimitError('Too many contact requests. Please try again later.');
  }

  // Encrypt email before storing
  const emailEncrypted = Buffer.from(encryptEmail(email, config.EMAIL_ENCRYPTION_KEY));

  // Prepare metadata
  const trackedMetadata: Record<string, unknown> = {
    ...metadata,
    userAgent,
    ip: requestIp,
  };
  const metadataPayload = Object.fromEntries(
    Object.entries(trackedMetadata).filter(([, value]) => value !== undefined)
  ) as Prisma.JsonObject;

  // Create contact request
  const contactRequest = await prisma.contactRequest.create({
    data: {
      name,
      emailHash,
      emailEncrypted, // Will always be set for new records
      company: company || null,
      employeeCount: employeeCount ?? null,
      message: message || null,
      requestIp: requestIp || null,
      userAgent: userAgent || null,
      metadata: Object.keys(metadataPayload).length > 0 ? metadataPayload : Prisma.JsonNull,
    },
  });

  // Send notification email to admin (async, don't wait for it)
  sendContactNotificationEmail({
    name,
    email,
    ...(company && { company }),
    ...(employeeCount !== undefined && { employeeCount }),
    ...(message && { message }),
  }).catch((error) => {
    console.error(
      `Failed to send contact notification email for request ${contactRequest.id}:`,
      error
    );
  });

  // Send confirmation email to user (async, don't wait for it)
  sendContactConfirmationEmail(email, name).catch((error) => {
    console.error(`Failed to send confirmation email to ${email}:`, error);
  });

  return {
    contactId: contactRequest.id,
    status: 'success',
    message: 'Contact request submitted successfully',
  };
}

async function sendContactNotificationEmail({
  name,
  email,
  company,
  employeeCount,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  employeeCount?: number;
  message?: string;
}): Promise<void> {
  const subject = `New Contact Request from ${name}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h2 style="color: #000000; margin-top: 0;">New Contact Request</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            ${employeeCount ? `<p style="margin: 10px 0;"><strong>Number of Employees:</strong> ${employeeCount.toLocaleString()}</p>` : ''}
            ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong></p><p style="margin: 10px 0; padding: 10px; background-color: #f0f0f0; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666666;">
            <p style="margin: 5px 0;">This is an automated notification from the NMCyber contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: config.EMAIL_FROM_ADDRESS, // Send to admin email
    subject,
    html,
  });
}

async function sendContactConfirmationEmail(email: string, name: string): Promise<void> {
  const subject = 'Thank you for contacting NMCyber';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h2 style="color: #000000; margin-top: 0;">Thank You, ${name}!</h2>
          
          <p style="color: #333333; margin: 15px 0;">We've received your contact request and will get back to you as soon as possible.</p>
          
          <p style="color: #333333; margin: 15px 0;">Our team typically responds within 24-48 hours during business days.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666666;">
            <p style="margin: 5px 0;">Best regards,<br>NMCyber Team</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: email,
    subject,
    html,
  });
}
