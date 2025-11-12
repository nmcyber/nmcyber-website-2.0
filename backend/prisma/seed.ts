import fs from 'node:fs';
import path from 'node:path';
import { prisma } from '../src/lib/prisma';

async function main() {
  const storageRelativePath = 'storage/sample-resource.txt';
  const storageAbsolutePath = path.resolve(process.cwd(), storageRelativePath);

  let sizeBytes: number | null = null;
  if (fs.existsSync(storageAbsolutePath)) {
    const stats = fs.statSync(storageAbsolutePath);
    sizeBytes = stats.size;
  }

  await prisma.resourceAsset.upsert({
    where: { slug: 'sample-resource' },
    update: {
      title: 'Sample Downloadable Resource',
      description: 'Placeholder asset for local testing.',
      storageKey: storageRelativePath,
      mimeType: 'text/plain',
      sizeBytes: sizeBytes ?? 0,
      active: true,
    },
    create: {
      slug: 'sample-resource',
      title: 'Sample Downloadable Resource',
      description: 'Placeholder asset for local testing.',
      storageKey: storageRelativePath,
      mimeType: 'text/plain',
      sizeBytes: sizeBytes ?? 0,
      active: true,
      retentionDays: 30,
    },
  });
}

main()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Seeding failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
