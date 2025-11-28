// API client for backend resource service
// Production: Set NEXT_PUBLIC_API_BASE_URL=https://www.nmcyber.com via environment variables
// Development default: http://localhost:4000

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export type ResourceRequestResponse = {
  message: string;
  requestId: string;
  status: string;
  assetId: string;
  expiresAt: string;
  metadata?: Record<string, unknown>;
  validation?: {
    provider: string;
    isValid: boolean;
    isDisposable: boolean;
  };
  devToken?: string;
};

export type ResourceRequestError = {
  error: string;
  details?: unknown;
};

export type ContactRequestResponse = {
  message: string;
  contactId: string;
  status: 'success';
};

export type ContactRequestError = {
  error: string;
  details?: unknown;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  employeeCount?: number | string; // Accept both for flexibility
  message?: string;
};

export async function requestResource(
  assetId: string,
  email: string,
  consentVersion: string = '2024-10-terms',
  metadata?: Record<string, unknown>
): Promise<ResourceRequestResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/resources/${encodeURIComponent(assetId)}/request`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        consentVersion,
        metadata,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as ResourceRequestError).error || 'Failed to request resource');
  }

  return data as ResourceRequestResponse;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactRequestResponse> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as ContactRequestError).error || 'Failed to submit contact form');
  }

  return data as ContactRequestResponse;
}
