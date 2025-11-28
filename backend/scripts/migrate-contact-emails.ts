/**
 * Migration script to encrypt existing ContactRequest emails
 *
 * NOTE: This script is OBSOLETE - the 'email' field has been removed from the schema.
 * This script is kept for historical reference only.
 *
 * If you need to migrate old records, you would need to:
 * 1. Temporarily add the 'email' field back to the schema
 * 2. Run this migration
 * 3. Remove the 'email' field again
 *
 * All new records are automatically encrypted when created.
 */

import { prisma } from '../src/lib/prisma';

async function migrateContactEmails() {
  console.log('This migration script is obsolete.');
  console.log('The "email" field has been removed from the ContactRequest schema.');
  console.log('All new records are automatically encrypted when created.');
  console.log('Old records without encryption cannot be migrated without the plain email field.');
  await prisma.$disconnect();
}

migrateContactEmails();
