import fs from 'node:fs';
import path from 'node:path';
import { prisma } from '../src/lib/prisma';

async function main() {
  const assets = [
    {
      slug: '1',
      title: '10 Cyber Traps SMBs Fall For and How to Prevent them',
      description:
        'Engaging, scenario-based sessions are designed to make security second nature for your team. Delivered live, virtually, or as eLearning.',
      storageKey: 'storage/10 Cyber Traps SMBs Fall For and How to Prevent them.pdf',
      mimeType: 'application/pdf',
    },
    {
      slug: '2',
      title: 'Free Cybersecurity Culture Checklist',
      description:
        'A comprehensive checklist to help build a strong cybersecurity culture in your organization.',
      storageKey: 'storage/FreeCybersecurityCultureChecklist.pdf',
      mimeType: 'application/pdf',
    },
    {
      slug: '3',
      title: 'Interactive Team Risk Quiz',
      description:
        "Test your team's cybersecurity awareness with this interactive risk assessment quiz.",
      storageKey: 'storage/Interactive Team Risk Quiz.pdf',
      mimeType: 'application/pdf',
    },
  ];

  for (const asset of assets) {
    const storageAbsolutePath = path.resolve(process.cwd(), asset.storageKey);
    let sizeBytes = 0;

    if (fs.existsSync(storageAbsolutePath)) {
      const stats = fs.statSync(storageAbsolutePath);
      sizeBytes = stats.size;
    }

    await prisma.resourceAsset.upsert({
      where: { slug: asset.slug },
      update: {
        title: asset.title,
        description: asset.description,
        storageKey: asset.storageKey,
        mimeType: asset.mimeType,
        sizeBytes,
        active: true,
      },
      create: {
        slug: asset.slug,
        title: asset.title,
        description: asset.description,
        storageKey: asset.storageKey,
        mimeType: asset.mimeType,
        sizeBytes,
        active: true,
        retentionDays: 30,
      },
    });
  }
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
