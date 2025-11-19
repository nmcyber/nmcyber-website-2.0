// API client for backend resource service

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
