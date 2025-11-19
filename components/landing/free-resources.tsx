'use client';

// website/components/company/free-resources.tsx

import { Download } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { FeaturedResource } from '@/types/resources';
import { FREE_RESOURCES } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';
import { DownloadDialog } from './download-dialog';

export default function FreeResources() {
  const featured = (FREE_RESOURCES.resources.find(
    (r) => 'featured' in r && r.image !== undefined
  ) ?? FREE_RESOURCES.resources[0]) as FeaturedResource;
  const others = FREE_RESOURCES.resources.filter((r) => r !== featured);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    assetId: string;
  } | null>(null);

  const handleDownloadClick = (resource: { id: number; title: string }) => {
    setSelectedResource({ title: resource.title, assetId: resource.id.toString() });
    setDialogOpen(true);
  };

  return (
    <section id="resources" className="relative py-20 px-6 z-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="gradient-heading2 text-left md:text-center">{FREE_RESOURCES.title}</h2>
        </div>

        {/* Featured card */}
        <div className="mb-8 rounded-2xl border-l-2 border-l-accent border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl md:w-[360px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-[Poppins] font-semibold text-white leading-[1.78]">
                {featured.title}
              </h3>
              {'description' in featured && featured.description && (
                <p className="mt-3 text-muted-foreground">{featured.description}</p>
              )}

              <div className="mt-5 flex items-center gap-3">
                <Button
                  onClick={() => handleDownloadClick(featured)}
                  className="h-11 rounded-full px-8 bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] hover:from-[var(--button-gradient-start-hover)] hover:to-[var(--button-gradient-end-hover)] text-white"
                >
                  <span className="mr-2">Download Now</span>
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* List items */}
        <div className="space-y-4">
          {others.map((r) => (
            <div
              key={r.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 md:px-6 md:py-5"
            >
              <div className="flex items-center gap-4">
                {/* Simple file type badge */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-blue-300">
                  <Image
                    src={r.icon}
                    alt={r.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl md:text-2xl font-[Poppins] font-semibold text-white flex-1">
                  {r.title}
                </p>
              </div>

              <Button
                onClick={() => handleDownloadClick(r)}
                className="h-10 w-10 rounded-full bg-accent text-white hover:bg-accent/90 text-base md:text-xl font-[Poppins] font-semibold"
                aria-label={`Download ${r.title}`}
                title={`Download ${r.title}`}
              >
                <Download className="h-5 w-5 shrink-0" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Binary Background */}
        <div className="absolute left-[-10%] top-[-20%] h-[90dvh] w-2/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        {/* Binary Background */}
        <div className="absolute right-[-10%] top-[-20%] h-[90dvh] w-2/10">
          <Image
            src="/images/binary.svg"
            alt="Binary Background"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Blur Elements */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.8}
        size="150px"
        blur="60px"
        className="left-[-3%] top-[10%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.3}
        size="300px"
        blur="60px"
        className="right-[-15%] top-[2%]"
      />

      {selectedResource && (
        <DownloadDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          resourceTitle={selectedResource.title}
          assetId={selectedResource.assetId}
        />
      )}
    </section>
  );
}
