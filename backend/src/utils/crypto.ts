import { createHash } from 'node:crypto';

export function hashEmail(input: string): string {
  return createHash('sha256').update(input.trim().toLowerCase()).digest('hex');
}
