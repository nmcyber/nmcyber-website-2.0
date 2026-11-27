import { cn } from '@/lib/utils';

export function SectionLabel({
  children,
  centered = false,
  className,
}: {
  children: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'mb-4 flex items-center gap-4 font-plus-jakarta-sans text-sm font-bold uppercase leading-[14px] text-accent/80 before:h-px before:w-16 before:bg-accent/60 after:h-px after:w-16 after:bg-accent/60',
        centered ? 'justify-center' : 'justify-start',
        className
      )}
    >
      {children}
    </p>
  );
}
