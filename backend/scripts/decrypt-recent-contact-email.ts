import { PrismaClient } from '@prisma/client';
import { config } from '../src/config';
import { decryptEmail, hashEmail } from '../src/utils/crypto';

const prisma = new PrismaClient();

async function decryptAndValidateRecentEmail() {
  console.log('Decrypting and validating most recent ContactRequest email...\n');

  // Get the most recent contact request
  const recentContact = await prisma.contactRequest.findFirst({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      emailHash: true,
      emailEncrypted: true,
      company: true,
      employeeCount: true,
      createdAt: true,
    },
  });

  if (!recentContact) {
    console.log('[ERROR] No ContactRequest records found.');
    await prisma.$disconnect();
    return;
  }

  console.log('Contact Request Details:');
  console.log('  ID:', recentContact.id);
  console.log('  Name:', recentContact.name);
  console.log('  Company:', recentContact.company || '(not provided)');
  console.log('  Employee Count:', recentContact.employeeCount || '(not provided)');
  console.log('  Created At:', recentContact.createdAt.toISOString());
  console.log('  Email Hash (stored):', recentContact.emailHash);
  console.log('');

  // Check if emailEncrypted exists
  if (!recentContact.emailEncrypted) {
    console.log('[ERROR] No encrypted email found for this record.');
    await prisma.$disconnect();
    return;
  }

  console.log('Encryption Status:');
  console.log('  Encrypted data length:', recentContact.emailEncrypted.length, 'bytes');
  console.log('');

  // Decrypt the email
  try {
    console.log('Decrypting email...');
    const decryptedEmail = decryptEmail(recentContact.emailEncrypted, config.EMAIL_ENCRYPTION_KEY);
    console.log('  [OK] Decrypted Email:', decryptedEmail);
    console.log('');

    // Validate by hashing and comparing
    console.log('Validating email hash...');
    const computedHash = hashEmail(decryptedEmail);
    console.log('  Computed hash:', computedHash);
    console.log('  Stored hash:  ', recentContact.emailHash);
    console.log('');

    if (computedHash === recentContact.emailHash) {
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

decryptAndValidateRecentEmail().catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
