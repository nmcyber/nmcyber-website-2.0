/**
 * Script to set PostgreSQL database timezone to UTC
 * Run with: bun scripts/set-timezone.ts
 */

import { prisma } from '../src/lib/prisma';

async function setTimezone() {
  try {
    console.log('Setting database timezone to UTC...');

    // Extract database name from DATABASE_URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    // Parse database name from connection string
    // Format: postgresql://user:password@host:port/database
    const urlMatch = dbUrl.match(/\/\/(?:[^@]+@)?[^/]+\/([^?]+)/);
    const dbName = urlMatch ? urlMatch[1] : null;

    if (!dbName) {
      throw new Error('Could not extract database name from DATABASE_URL');
    }

    console.log(`Database name: ${dbName}`);

    // Connect to postgres database to run ALTER DATABASE command
    // (ALTER DATABASE must be run on a different database connection)
    const postgresUrl = dbUrl.replace(/\/[^/]+(\?|$)/, '/postgres$1');

    // Use raw query to set timezone
    // Note: This requires connecting to the 'postgres' database first
    const { PrismaClient } = await import('@prisma/client');
    const adminPrisma = new PrismaClient({
      datasources: {
        db: {
          url: postgresUrl,
        },
      },
    });

    await adminPrisma.$executeRawUnsafe(`ALTER DATABASE ${dbName} SET timezone = 'UTC'`);

    console.log('Successfully set database timezone to UTC');

    // Verify the setting
    const result = await adminPrisma.$queryRawUnsafe<Array<{ setting: string }>>(
      `SELECT setting FROM pg_settings WHERE name = 'timezone' AND context = 'database'`
    );

    if (result.length > 0) {
      console.log(`Verified: Database timezone is set to: ${result[0].setting}`);
    }

    await adminPrisma.$disconnect();
  } catch (error) {
    console.error('Error setting timezone:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

setTimezone();
