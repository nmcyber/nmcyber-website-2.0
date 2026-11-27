'use client';

import { ArrowUpRight, CheckCircle2, ChevronDown, Mail, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { COMPANY_INFO, CONTACT_FORM } from '@/utils/constants';

export type Enquiry = Record<(typeof CONTACT_FORM.fields)[number]['name'], string>;

const controlStyle =
  'min-h-12 w-full rounded-lg border border-slate-500/80 bg-[#101e30] px-3.5 py-3 text-base text-white placeholder:text-slate-400 hover:border-accent/70 hover:shadow-[0_0_12px_rgba(70,190,230,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-invalid:border-red-400 motion-safe:transition-[border-color,box-shadow] motion-safe:duration-200 motion-safe:ease-in-out';

function openDraft(values: Enquiry) {
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

export default function ContactForm({ sendEnquiryAction }: ContactFormProps) {
  const [feedback, setFeedback] = useState<'idle' | 'draft' | 'sent' | 'error'>('idle');
  const successHeading = useRef<HTMLHeadingElement>(null);
  const pending = useRef(false);
  
  useEffect(() => {
    if (feedback === 'sent') successHeading.current?.focus();
  }, [feedback]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Enquiry>();

  async function submitEnquiry(values: Enquiry) {
    if (pending.current) return;
    if (!sendEnquiryAction) {
      openDraft(values);
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

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.25fr)] lg:items-start lg:gap-14 xl:gap-20">
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
            {[
              { Icon: Mail, text: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
              {
                Icon: Phone,
                text: COMPANY_INFO.phone,
                href: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
              },
            ].map(({ Icon, text, href }) => (
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
        <div className="min-w-0 rounded-2xl border border-slate-600/70 bg-linear-to-br from-[#192b40] via-[#122134] to-[#101c2c] p-5 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(70,190,230,0.12)] motion-safe:transition-[border-color,box-shadow] sm:rounded-3xl sm:p-8 lg:p-9">
          {feedback === 'sent' ? (
            <div className="space-y-5 text-base leading-relaxed text-slate-300">
              <CheckCircle2 aria-hidden="true" className="size-8 text-sky-300" />
              <h3
                ref={successHeading}
                tabIndex={-1}
                className="border-b border-white/10 pb-5 font-plus-jakarta-sans text-2xl font-semibold tracking-tight text-white"
              >
                {CONTACT_FORM.success.heading}
              </h3>
              <h4 className="text-lg font-semibold text-white">
                {CONTACT_FORM.success.nextHeading}
              </h4>
              <p>{CONTACT_FORM.success.review}</p>
              <p>{CONTACT_FORM.success.proposal}</p>
            </div>
          ) : (
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
              {CONTACT_FORM.fields.map((field) => {
                const { name, label, placeholder } = field;
                const required = 'error' in field;
                const error = errors[name]?.message;
                const props = {
                  id: `contact-${name}`,
                  placeholder,
                  disabled: isSubmitting,
                  required,
                  'aria-invalid': Boolean(error),
                  'aria-describedby': error ? `contact-${name}-error` : undefined,
                  className: controlStyle,
                  ...register(name, {
                    validate: (value) => {
                      if (!required) return true;
                      if (!value.trim()) return field.error;
                      if (
                        field.type === 'email' &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
                      )
                        return field.error;
                      return true;
                    },
                  }),
                };
                return (
                  <div
                    key={name}
                    className={`min-w-0 space-y-2 ${name === 'message' ? 'sm:col-span-2' : ''}`}
                  >
                    <label htmlFor={props.id} className="block text-sm font-semibold text-white">
                      {label}
                      {!required && (
                        <span className="ml-2 text-xs font-normal text-slate-400">
                          {CONTACT_FORM.optional}
                        </span>
                      )}
                    </label>
                    {field.type === 'select' ? (
                      <div className="relative">
                        <select
                          {...props}
                          defaultValue=""
                          className={`${controlStyle} appearance-none truncate pr-10 invalid:text-slate-400`}
                        >
                          <option value="" disabled>
                            {placeholder}
                          </option>
                          {CONTACT_FORM.services.map((service) => (
                            <option key={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          size={16}
                          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sky-300"
                        />
                      </div>
                    ) : field.type === 'textarea' ? (
                      <Textarea {...props} rows={4} className={`${controlStyle} resize-y`} />
                    ) : (
                      <Input
                        {...props}
                        type={field.type}
                        autoComplete={'autoComplete' in field ? field.autoComplete : undefined}
                      />
                    )}
                    {error && (
                      <p id={`contact-${name}-error`} className="text-sm text-red-300">
                        {error}
                      </p>
                    )}
                  </div>
                );
              })}
              {feedback === 'error' && (
                <p role="alert" className="text-sm text-red-300 sm:col-span-2">
                  {CONTACT_FORM.sendError}
                </p>
              )}
              {feedback === 'draft' && (
                <output className="text-sm text-slate-300 sm:col-span-2">
                  {CONTACT_FORM.draftHint}
                </output>
              )}
              <Button
                disabled={isSubmitting}
                type="submit"
                className="mt-1 min-h-12 rounded-full bg-accent hover:bg-accent hover:opacity-90 transition-opacity duration-200 ease-in-out motion-reduce:transition-none font-semibold text-white has-[>svg]:px-6 sm:col-span-2 sm:justify-self-end"
              >
                {sendEnquiryAction
                  ? isSubmitting
                    ? CONTACT_FORM.sending
                    : CONTACT_FORM.sendCta
                  : CONTACT_FORM.formCta}
                <ArrowUpRight aria-hidden="true" size={16} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
