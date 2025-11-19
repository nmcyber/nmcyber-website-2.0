// Email validation with ZeroBounce API and built-in checks
import { config } from '../config';

export type EmailValidationResult = {
  isValid: boolean;
  isDisposable: boolean;
  isRoleBased: boolean;
  reason?: string;
  provider?: string;
};

type ZeroBounceResponse = {
  address?: string;
  status?: 'valid' | 'invalid' | 'catch-all' | 'unknown' | 'spamtrap' | 'abuse' | 'do_not_mail';
  sub_status?: string;
  free_email?: boolean;
  did_you_mean?: string | null;
  account?: string;
  domain?: string;
  domain_age_days?: string;
  smtp_provider?: string;
  mx_found?: string;
  mx_record?: string;
  firstname?: string;
  lastname?: string;
  gender?: string;
  country?: string;
  region?: string;
  city?: string;
  zipcode?: string;
  processed_at?: string;
  email?: string;
  email_status?: string;
  email_sub_status?: string;
  [key: string]: unknown;
};

// Common disposable email domains (catches ones ZeroBounce might miss)
const COMMON_DISPOSABLE_DOMAINS = new Set([
  '10minutemail.com',
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  'throwaway.email',
  'temp-mail.org',
  'getnada.com',
  'dropeso.com',
  'delaeb.com',
  'denipl.net',
  'yopmail.com',
  'mohmal.com',
  'fakeinbox.com',
  'trashmail.com',
  'sharklasers.com',
  'getairmail.com',
  'mintemail.com',
]);

function isCommonDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  if (!domain) return false;

  if (COMMON_DISPOSABLE_DOMAINS.has(domain)) {
    return true;
  }

  // Check subdomains
  const parts = domain.split('.');
  for (let i = 0; i < parts.length - 1; i++) {
    const subdomain = parts.slice(i).join('.');
    if (COMMON_DISPOSABLE_DOMAINS.has(subdomain)) {
      return true;
    }
  }

  return false;
}

// ZeroBounce API validation - see README for setup details
async function validateWithZeroBounce(
  email: string,
  ipAddress?: string
): Promise<EmailValidationResult | null> {
  const apiKey = config.ZEROBOUNCE_API_KEY;
  if (!apiKey) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      email: email,
    });

    if (ipAddress) {
      params.append('ip_address', ipAddress);
    }

    const response = await fetch(`https://api.zerobounce.net/v2/validate?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn(`ZeroBounce API validation failed: ${response.status}`, errorText);
      return null;
    }

    const rawData = (await response.json()) as unknown;
    console.log(`ZeroBounce raw response for ${email}:`, JSON.stringify(rawData, null, 2));

    if (
      typeof rawData === 'object' &&
      rawData !== null &&
      'error' in rawData &&
      typeof rawData.error === 'string'
    ) {
      console.warn(`ZeroBounce API error for ${email}:`, rawData.error);
      return null;
    }

    const data = rawData as ZeroBounceResponse;
    console.log(`ZeroBounce validation for ${email}:`, {
      status: data.status,
      free_email: data.free_email,
      sub_status: data.sub_status,
      account: data.account,
      domain: data.domain,
    });

    // Accept 'valid' and 'catch-all' (QQ, corporate domains use catch-all)
    const isValid = data.status === 'valid' || data.status === 'catch-all';

    // Only mark as disposable if ZeroBounce explicitly says so (not free_email flag)
    const isDisposable =
      data.status === 'spamtrap' ||
      data.status === 'abuse' ||
      data.status === 'do_not_mail' ||
      (data.sub_status?.toLowerCase().includes('disposable') ?? false);

    const isRoleBased = data.account
      ? [
          'info',
          'support',
          'sales',
          'admin',
          'contact',
          'help',
          'mail',
          'postmaster',
          'webmaster',
          'noreply',
          'no-reply',
        ].some((role) => data.account?.toLowerCase().includes(role))
      : false;

    const result: EmailValidationResult = {
      isValid,
      isDisposable,
      isRoleBased,
      provider: 'zerobounce',
    };

    if (!isValid) {
      result.reason = data.sub_status || data.status || 'Invalid email';
    }

    return result;
  } catch (error) {
    console.error('ZeroBounce API validation error:', error);
    return null;
  }
}

function validateEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validation flow: format check → disposable check → ZeroBounce API → fallback
export async function validateEmail(email: string): Promise<EmailValidationResult> {
  if (!validateEmailFormat(email)) {
    return {
      isValid: false,
      isDisposable: false,
      isRoleBased: false,
      reason: 'Invalid email format',
      provider: 'format-check',
    };
  }

  if (isCommonDisposableEmail(email)) {
    return {
      isValid: false,
      isDisposable: true,
      isRoleBased: false,
      reason: 'Disposable email addresses are not allowed',
      provider: 'disposable-check',
    };
  }

  const zeroBounceResult = await validateWithZeroBounce(email);
  if (zeroBounceResult) {
    return zeroBounceResult;
  }

  // Fallback if ZeroBounce unavailable
  return {
    isValid: true,
    isDisposable: false,
    isRoleBased: false,
    reason: 'Email passed basic checks but could not be fully verified (ZeroBounce not configured)',
    provider: 'fallback',
  };
}

export function shouldRejectEmail(validation: EmailValidationResult): boolean {
  return !validation.isValid || validation.isDisposable;
}

export function getRejectionReason(validation: EmailValidationResult): string | undefined {
  if (!validation.isValid) {
    return validation.reason || 'Invalid email address';
  }
  if (validation.isDisposable) {
    return 'Disposable email addresses are not allowed';
  }
  return undefined;
}
