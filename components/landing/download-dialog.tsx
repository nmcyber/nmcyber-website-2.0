'use client';

import { AlertCircle, CheckCircle2, Download, Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { requestResource } from '@/lib/api';

type DownloadDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceTitle: string;
  assetId: string;
};

type DialogState = 'form' | 'loading' | 'success' | 'error';

export function DownloadDialog({
  open,
  onOpenChange,
  resourceTitle,
  assetId,
}: DownloadDialogProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<DialogState>('form');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Please enter an email address');
      return;
    }

    setState('loading');
    setErrorMessage('');

    try {
      await requestResource(assetId, email.trim());
      setState('success');
    } catch (error) {
      setState('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to request resource. Please try again.'
      );
    }
  };

  const handleClose = () => {
    if (state === 'loading') return;
    setState('form');
    setEmail('');
    setErrorMessage('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md font-[Poppins]">
        {state === 'form' && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-[Poppins]">
                <Download className="h-5 w-5" aria-hidden="true" />
                Download Resource
              </DialogTitle>
              <DialogDescription className="font-[Poppins]">
                Enter your email address to receive a download link for{' '}
                <strong>{resourceTitle}</strong>
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-[Poppins]">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 font-[Poppins]"
                      required
                      aria-required="true"
                      aria-invalid={!!errorMessage}
                      aria-describedby={errorMessage ? 'email-error' : 'email-help'}
                    />
                  </div>
                  {errorMessage && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errorMessage}
                    </p>
                  )}
                </div>
                <p id="email-help" className="text-xs text-muted-foreground">
                  By submitting, you agree to receive the download link via email. We respect your
                  privacy and won't spam you.
                </p>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Get Download Link
                </Button>
              </DialogFooter>
            </form>
          </>
        )}

        {state === 'loading' && (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">Processing your request...</p>
          </div>
        )}

        {state === 'success' && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-600 dark:text-green-400 font-[Poppins]">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Check Your Email
              </DialogTitle>
              <DialogDescription className="font-[Poppins]">
                We've sent a download link to <strong>{email}</strong>
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Click the link in the email to download <strong>{resourceTitle}</strong>. The link
                expires in 24 hours.
              </p>
            </div>
            <DialogFooter>
              <Button onClick={handleClose}>Close</Button>
            </DialogFooter>
          </>
        )}

        {state === 'error' && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-destructive font-[Poppins]">
                <AlertCircle className="h-5 w-5" aria-hidden="true" />
                Request Failed
              </DialogTitle>
              <DialogDescription className="font-[Poppins]">{errorMessage}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Please check your email address and try again. If the problem persists, contact
                support.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  setState('form');
                  setErrorMessage('');
                }}
              >
                Try Again
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
