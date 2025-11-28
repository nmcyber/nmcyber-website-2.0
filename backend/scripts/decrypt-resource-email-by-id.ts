import { PrismaClient } from '@prisma/client';
import { config } from '../src/config';
import { decryptEmail, hashEmail } from '../src/utils/crypto';

const prisma = new PrismaClient();

async function decryptResourceEmailById(requestId: string) {
  console.log(`Decrypting ResourceRequest email for ID: ${requestId}\n`);

  const request = await prisma.resourceRequest.findUnique({
    where: { id: requestId },
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

  if (!request) {
    console.log('[ERROR] ResourceRequest not found with ID:', requestId);
    await prisma.$disconnect();
    return;
  }

  console.log('Resource Request Details:');
  console.log('  ID:', request.id);
  console.log('  Asset:', request.asset.title, `(${request.asset.slug})`);
  console.log('  Status:', request.status);
  console.log('  Consent Version:', request.consentVersion);
  console.log('  Request IP:', request.requestIp || '(not provided)');
  console.log('  Download Count:', request.downloadCount);
  console.log('  Created At:', request.createdAt.toISOString());
  console.log('  Email Hash (stored):', request.emailHash);
  console.log('');

  if (!request.emailEncrypted || request.emailEncrypted.length === 0) {
    console.log('[ERROR] No encrypted email found for this record.');
    console.log('   This is likely an old record created before encryption was implemented.');
    console.log('   Old records cannot be decrypted as the plain email was not stored.');
    await prisma.$disconnect();
    return;
  }

  try {
    const decryptedEmail = decryptEmail(request.emailEncrypted, config.EMAIL_ENCRYPTION_KEY);
    const computedHash = hashEmail(decryptedEmail);

    console.log('Decrypted Email:', decryptedEmail);
    console.log('');

    if (computedHash === request.emailHash) {
      console.log('[OK] VALIDATION SUCCESSFUL!');
      console.log('   Hash matches:', computedHash);
    } else {
      console.log('[ERROR] VALIDATION FAILED!');
      console.log('   Computed hash:', computedHash);
      console.log('   Stored hash:  ', request.emailHash);
    }
  } catch (error) {
    console.log('[ERROR] Decryption failed:', error);
  }

  await prisma.$disconnect();
}

// Get ID from command line argument
const requestId = process.argv[2];

if (!requestId) {
  console.log('Usage: bun scripts/decrypt-resource-email-by-id.ts <request-id>');
  console.log('Example: bun scripts/decrypt-resource-email-by-id.ts abc123-def456-...');
  process.exit(1);
}

decryptResourceEmailById(requestId).catch((error) => {
  console.error('Script error:', error);
  process.exit(1);
});
