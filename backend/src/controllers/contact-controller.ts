// API endpoints for contact form submissions
import type { Request, Response } from 'express';
import { z } from 'zod';
import type { CreateContactRequestInput } from '../services/contact-service';
import { createContactRequest } from '../services/contact-service';
import { asyncHandler } from '../utils/asyncHandler';
import { BadRequestError } from '../utils/http-errors';

const contactRequestSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200, 'Name is too long'),
  email: z.string().email('Email address must be valid'),
  company: z.string().max(200, 'Company name is too long').optional(),
  employeeCount: z
    .union([z.string(), z.number()])
    .optional()
    .transform((val) => {
      if (val === undefined || val === null || val === '') return undefined;
      const num = typeof val === 'string' ? parseInt(val, 10) : val;
      return Number.isNaN(num) ? undefined : num;
    }),
  message: z.string().max(5000, 'Message is too long').optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const submitContact = asyncHandler(async (req: Request, res: Response) => {
  const parsed = contactRequestSchema.safeParse(req.body);

  if (!parsed.success) {
    throw new BadRequestError('Invalid request payload', parsed.error.flatten());
  }

  const payload: CreateContactRequestInput = {
    name: parsed.data.name,
    email: parsed.data.email,
    ...(parsed.data.company && { company: parsed.data.company }),
    ...(parsed.data.employeeCount !== undefined && { employeeCount: parsed.data.employeeCount }),
    ...(parsed.data.message && { message: parsed.data.message }),
  };

  if (parsed.data.metadata) {
    payload.metadata = parsed.data.metadata;
  }

  if (req.ip) {
    payload.requestIp = req.ip;
  }

  const userAgent = req.get('user-agent');
  if (userAgent) {
    payload.userAgent = userAgent;
  }

  const result = await createContactRequest(payload);

  return res.status(201).json({
    message: result.message,
    contactId: result.contactId,
    status: result.status,
  });
});
