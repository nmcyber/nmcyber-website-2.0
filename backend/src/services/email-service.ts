// Email service using Resend API
import { Resend } from 'resend';
import { config } from '../config';

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (resendClient) {
    return resendClient;
  }

  if (!config.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is required. Get it from https://resend.com/api-keys');
  }

  resendClient = new Resend(config.RESEND_API_KEY);
  return resendClient;
}

export type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

export async function sendEmail({ to, subject, html, text }: SendEmailOptions): Promise<void> {
  const fromAddress = config.EMAIL_FROM_ADDRESS;
  const fromName = config.EMAIL_FROM_NAME || 'NMCyber';

  if (!fromAddress) {
    throw new Error('EMAIL_FROM_ADDRESS must be configured');
  }

  console.log(`Attempting to send email:`, {
    from: `${fromName} <${fromAddress}>`,
    to,
    subject,
  });

  const resend = getResendClient();
  const result = await resend.emails.send({
    from: `${fromName} <${fromAddress}>`,
    to,
    subject,
    html,
    text: text || html.replace(/<[^>]*>/g, ''),
  });

  console.log(`Email sent via Resend:`, result);
}

export async function sendDownloadLinkEmail(
  to: string,
  downloadUrl: string,
  assetName?: string
): Promise<void> {
  const subject = assetName ? `Your download: ${assetName}` : 'Your download link';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h2 style="color: #000000; margin-top: 0;">Your Download is Ready</h2>
          <p style="color: #333333; margin: 15px 0;">Thank you for your interest! Click the button below to download your resource${assetName ? `: ${assetName}` : ''}.</p>
          
          <!-- High contrast button with gradient colors -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadUrl}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #045b7d 0%, #64cdf6 100%); background-color: #045b7d; color: black!important; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; border: 2px solid #045b7d;">
              Download Now
            </a>
          </div>
          
          <p style="color: #333333; margin: 15px 0;"><strong>This link expires in 24 hours.</strong></p>
          <p style="color: #666666; margin: 15px 0; font-size: 14px;">If the button doesn't work, copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #045b7d; background-color: #f0f0f0; padding: 10px; border-radius: 4px; font-size: 12px; margin: 15px 0;">${downloadUrl}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666666;">
            <p style="margin: 5px 0;">Best regards,<br>NMCyber Team</p>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to,
    subject,
    html,
  });
}
