import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterForm() {
  return (
    <div className="space-y-3">
      <span
        className="uppercase tracking-wider text-sm text-muted-foreground font-semibold lg:sm:text-nowrap mb-4 leading-tight"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
      >
        Subscribe to our newsletter
      </span>
      <div className="flex gap-1">
        <Input
          type="email"
          placeholder="Enter your e-mail"
          className="flex-1"
          style={{
            backgroundColor: 'hsl(240, 3.7%, 15.9%)',
            borderColor: 'hsl(240, 3.7%, 15.9%)',
            color: 'hsl(0, 0%, 98%)',
          }}
        />
        <Button size="sm" className="bg-accent hover:bg-accent/90 text-black px-3">
          <Mail className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
