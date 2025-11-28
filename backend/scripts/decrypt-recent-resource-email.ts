import { PrismaClient } from '@prisma/client';
import { config } from '../src/config';
import { decryptEmail, hashEmail } from '../src/utils/crypto';

const prisma = new PrismaClient();

async function decryptAndValidateRecentResourceEmail() {
  console.log('Decrypting and validating most recent ResourceRequest email...\n');

  // Get the most recent resource request with asset info
  const recentRequest = await prisma.resourceRequest.findFirst({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      emailHash: true,
      emailEncrypted: true,
      status: true,
      consentVersion: true,
      requestIp: true,
      downloadCount: true,
      createdAt: true,
      asset: {
        select: {
          id: true,
          slug: true,
          title: true,
        },
      },
    },
  });

  if (!recentRequest) {
    console.log('[ERROR] No ResourceRequest records found.');
    await prisma.$disconnect();
    return;
  }

  console.log('Resource Request Details:');
  console.log('  ID:', recentRequest.id);
  console.log('  Asset:', recentRequest.asset.title, `(${recentRequest.asset.slug})`);
  console.log('  Status:', recentRequest.status);
  console.log('  Consent Version:', recentRequest.consentVersion);
  console.log('  Request IP:', recentRequest.requestIp || '(not provided)');
  console.log('  Download Count:', recentRequest.downloadCount);
  console.log('  Created At:', recentRequest.createdAt.toISOString());
  console.log('  Email Hash (stored):', recentRequest.emailHash);
  console.log('');

  // Check if emailEncrypted exists
  if (!recentRequest.emailEncrypted || recentRequest.emailEncrypted.length === 0) {
    console.log('[ERROR] No encrypted email found for this record.');
    console.log('   This is likely an old record created before encryption was implemented.');
    console.log('   Old records cannot be decrypted as the plain email was not stored.');
    await prisma.$disconnect();
    return;
  }

  console.log('Encryption Status:');
  console.log('  Encrypted data length:', recentRequest.emailEncrypted.length, 'bytes');
  console.log('');

  // Decrypt the email
  try {
    console.log('Decrypting email...');
    const decryptedEmail = decryptEmail(recentRequest.emailEncrypted, config.EMAIL_ENCRYPTION_KEY);
    console.log('  [OK] Decrypted Email:', decryptedEmail);
    console.log('');

    // Validate by hashing and comparing
    console.log('Validating email hash...');
    const computedHash = hashEmail(decryptedEmail);
    console.log('  Computed hash:', computedHash);
    console.log('  Stored hash:  ', recentRequest.emailHash);
    console.log('');

    if (computedHash === recentRequest.emailHash) {
      console.log('[OK] VALIDATION SUCCESSFUL!');
      console.log('   The decrypted email matches the stored hash.');
      console.log('');
      console.log('Final Result:');
      console.log('   Email:', decryptedEmail);
    } else {
      console.log('[ERROR] VALIDATION FAILED!');
      console.log('   The decrypted email hash does NOT match the stored hash.');
      console.log('   This could indicate:');
      console.log('   - Encryption key mismatch');
      console.log('   - Data corruption');
      console.log('   - Hash was computed differently');
    }
  } catch (error) {
    console.log('[ERROR] Decryption failed:', error);
    if (error instanceof Error) {
      console.log('   Error message:', error.message);
    }
  }

  await prisma.$disconnect();
}

decryptAndValidateRecentResourceEmail().catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
