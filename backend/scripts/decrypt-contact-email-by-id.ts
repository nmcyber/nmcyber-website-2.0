import { PrismaClient } from '@prisma/client';
import { config } from '../src/config';
import { decryptEmail, hashEmail } from '../src/utils/crypto';

const prisma = new PrismaClient();

async function decryptEmailById(contactId: string) {
  console.log(`Decrypting ContactRequest email for ID: ${contactId}\n`);

  const contact = await prisma.contactRequest.findUnique({
    where: { id: contactId },
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

  if (!contact) {
    console.log('[ERROR] ContactRequest not found with ID:', contactId);
    await prisma.$disconnect();
    return;
  }

  console.log('Contact Request Details:');
  console.log('  ID:', contact.id);
  console.log('  Name:', contact.name);
  console.log('  Company:', contact.company || '(not provided)');
  console.log('  Employee Count:', contact.employeeCount || '(not provided)');
  console.log('  Created At:', contact.createdAt.toISOString());
  console.log('  Email Hash (stored):', contact.emailHash);
  console.log('');

  if (!contact.emailEncrypted) {
    console.log('[ERROR] No encrypted email found for this record.');
    await prisma.$disconnect();
    return;
  }

  try {
    const decryptedEmail = decryptEmail(contact.emailEncrypted, config.EMAIL_ENCRYPTION_KEY);
    const computedHash = hashEmail(decryptedEmail);

    console.log('Decrypted Email:', decryptedEmail);
    console.log('');

    if (computedHash === contact.emailHash) {
      console.log('[OK] VALIDATION SUCCESSFUL!');
      console.log('   Hash matches:', computedHash);
    } else {
      console.log('[ERROR] VALIDATION FAILED!');
      console.log('   Computed hash:', computedHash);
      console.log('   Stored hash:  ', contact.emailHash);
    }
  } catch (error) {
    console.log('[ERROR] Decryption failed:', error);
  }

  await prisma.$disconnect();
}

// Get ID from command line argument
const contactId = process.argv[2];

if (!contactId) {
  console.log('Usage: bun scripts/decrypt-contact-email-by-id.ts <contact-id>');
  console.log(
    'Example: bun scripts/decrypt-contact-email-by-id.ts 1e6cb480-38bf-4348-a303-e90c3b9c7706'
  );
  process.exit(1);
}

decryptEmailById(contactId).catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
