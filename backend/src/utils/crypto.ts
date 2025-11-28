// Cryptographic utilities
import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // 96 bits for GCM
const AUTH_TAG_LENGTH = 16; // 128 bits
const SALT_LENGTH = 32;

export function hashEmail(input: string): string {
  return createHash('sha256').update(input.trim().toLowerCase()).digest('hex');
}

/**
 * Derives a 32-byte encryption key from a password using PBKDF2
 */
function deriveKey(password: string, salt: Buffer): Buffer {
  return createHash('sha256')
    .update(password + salt.toString('hex'))
    .digest();
}

/**
 * Encrypts an email address using AES-256-GCM
 * Returns the encrypted data as a Uint8Array (salt + iv + authTag + ciphertext)
 */
export function encryptEmail(email: string, encryptionKey: string): Uint8Array {
  const salt = randomBytes(SALT_LENGTH);
  const key = deriveKey(encryptionKey, salt);
  const iv = randomBytes(IV_LENGTH);

  const cipher = createCipheriv(ALGORITHM, key, iv);
  cipher.setAAD(Buffer.from('email')); // Additional authenticated data

  const encrypted = Buffer.concat([cipher.update(email, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();

  // Combine: salt (32) + iv (12) + authTag (16) + encrypted data
  return new Uint8Array(Buffer.concat([salt, iv, authTag, encrypted]));
}

/**
 * Decrypts an email address from encrypted bytes
 */
export function decryptEmail(encryptedData: Uint8Array, encryptionKey: string): string {
  const buffer = Buffer.from(encryptedData);

  // Extract components
  const salt = buffer.subarray(0, SALT_LENGTH);
  const iv = buffer.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
  const authTag = buffer.subarray(
    SALT_LENGTH + IV_LENGTH,
    SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH
  );
  const encrypted = buffer.subarray(SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);

  const key = deriveKey(encryptionKey, salt);

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  decipher.setAAD(Buffer.from('email'));

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString('utf8');
}
