'use client';

import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO, CONTACT_FORM, CONTACT_LINKS } from '@/utils/constants';

import { type Enquiry, EnquiryField } from './enquiry-field';

export type { Enquiry } from './enquiry-field';

function openEmailDraft(values: Enquiry) {
  const body = CONTACT_FORM.fields
    .filter(({ name }) => values[name].trim())
    .map(({ name, label }) => `${label}: ${values[name].trim()}`)
    .join('\r\n\r\n');
  window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(values.service)}&body=${encodeURIComponent(body)}`;
}

type ContactFormProps = {
  // Resolve only after the provider accepts the enquiry. Reject on failure.
  sendEnquiryAction?: (values: Enquiry) => Promise<void>;
};

function EnquiryForm({ sendEnquiryAction }: ContactFormProps) {
  const [feedback, setFeedback] = useState<'idle' | 'draft' | 'sent' | 'error'>('idle');
  const pending = useRef(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Enquiry>();

  async function submitEnquiry(values: Enquiry) {
    if (pending.current) return;
    if (!sendEnquiryAction) {
      openEmailDraft(values);
      setFeedback('draft');
      return;
    }

    pending.current = true;
    setFeedback('idle');
    try {
      await sendEnquiryAction(values);
      setFeedback('sent');
    } catch {
      setFeedback('error');
    } finally {
      pending.current = false;
    }
  }

  if (feedback === 'sent') return <EnquiryConfirmation />;
  const submitLabel = sendEnquiryAction
    ? isSubmitting
      ? CONTACT_FORM.sending
      : CONTACT_FORM.sendCta
    : CONTACT_FORM.formCta;

  return (
    <form
      noValidate
      aria-labelledby="enquiry-heading"
      aria-busy={isSubmitting}
      onSubmit={handleSubmit(submitEnquiry)}
      className="grid gap-5 sm:grid-cols-2"
    >
      <h3
        id="enquiry-heading"
        className="border-b border-white/10 pb-5 font-plus-jakarta-sans text-2xl font-semibold tracking-tight text-white sm:col-span-2"
      >
        {CONTACT_FORM.heading}
      </h3>
      {CONTACT_FORM.fields.map((field) => (
        <EnquiryField
          key={field.name}
          field={field}
          register={register}
          disabled={isSubmitting}
          error={errors[field.name]?.message}
        />
      ))}
      {feedback === 'error' && (
        <p role="alert" className="text-sm text-red-300 sm:col-span-2">
          {CONTACT_FORM.sendError}
        </p>
      )}
      {feedback === 'draft' && (
        <output className="text-sm text-slate-300 sm:col-span-2">{CONTACT_FORM.draftHint}</output>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        className="mt-1 min-h-12 rounded-full bg-accent hover:bg-accent hover:opacity-90 transition-opacity duration-200 ease-in-out motion-reduce:transition-none font-semibold text-white has-[>svg]:px-6 sm:col-span-2 sm:justify-self-end"
      >
        {submitLabel}
        <ArrowUpRight aria-hidden="true" size={16} />
      </Button>
    </form>
  );
}

function EnquiryConfirmation() {
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    successHeading.current?.focus();
  }, []);

  return (
    <div className="space-y-5 text-base leading-relaxed text-slate-300">
      <CheckCircle2 aria-hidden="true" className="size-8 text-sky-300" />
      <h3
        ref={successHeading}
        tabIndex={-1}
        className="border-b border-white/10 pb-5 font-plus-jakarta-sans text-2xl font-semibold tracking-tight text-white"
      >
        {CONTACT_FORM.success.heading}
      </h3>
      <h4 className="text-lg font-semibold text-white">{CONTACT_FORM.success.nextHeading}</h4>
      <p>{CONTACT_FORM.success.review}</p>
      <p>{CONTACT_FORM.success.proposal}</p>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="relative isolate overflow-hidden px-1 lg:self-stretch lg:pt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-[42%] bg-[url('/images/Looper2.svg')] bg-cover bg-center opacity-60 lg:block"
      />
      <h2
        id="contact-heading"
        className="text-balance font-plus-jakarta-sans text-[clamp(2.5rem,4.6vw,3.625rem)] leading-[1.04] font-bold tracking-[-0.055em] text-white"
      >
        {CONTACT_FORM.title}
      </h2>
      <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-300 sm:text-lg">
        {CONTACT_FORM.description}
      </p>
      <div className="mt-5 grid max-w-sm divide-y divide-white/10 border-y border-white/10 lg:mt-9">
        {CONTACT_LINKS.map(({ Icon, text, href }) => (
          <a
            key={href}
            href={href}
            className="group flex min-h-14 items-center gap-3 rounded-sm py-2 font-medium text-slate-100 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-sky-300">
              <Icon aria-hidden="true" size={17} />
            </span>
            {text}
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              className="ml-auto mr-2 text-slate-400 group-hover:text-sky-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactForm({ sendEnquiryAction }: ContactFormProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.25fr)] lg:items-start lg:gap-14 xl:gap-20">
        <ContactDetails />
        <div className="min-w-0 rounded-2xl border border-slate-600/70 bg-linear-to-br from-[#192b40] via-[#122134] to-[#101c2c] p-5 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(70,190,230,0.12)] motion-safe:transition-[border-color,box-shadow] sm:rounded-3xl sm:p-8 lg:p-9">
          <EnquiryForm sendEnquiryAction={sendEnquiryAction} />
        </div>
      </div>
    </section>
  );
}
