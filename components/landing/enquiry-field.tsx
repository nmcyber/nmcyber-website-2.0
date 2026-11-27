import { ChevronDown } from 'lucide-react';
import type { UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_FORM } from '@/utils/constants';

type Field = (typeof CONTACT_FORM.fields)[number];
export type Enquiry = Record<Field['name'], string>;

const controlStyle =
  'min-h-12 w-full rounded-lg border border-slate-500/80 bg-[#101e30] px-3.5 py-3 text-base text-white placeholder:text-slate-400 hover:border-accent/70 hover:shadow-[0_0_12px_rgba(70,190,230,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-invalid:border-red-400 motion-safe:transition-[border-color,box-shadow] motion-safe:duration-200 motion-safe:ease-in-out';

function validateField(field: Field, value: string) {
  if (!('error' in field)) return true;
  const trimmed = value.trim();
  if (!trimmed) return field.error;
  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return field.error;
  return true;
}

type EnquiryFieldProps = {
  field: Field;
  register: UseFormRegister<Enquiry>;
  disabled: boolean;
  error?: string;
};

export function EnquiryField({ field, register, disabled, error }: EnquiryFieldProps) {
  const { name, label, placeholder } = field;
  const required = 'error' in field;
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const props = {
    id,
    placeholder,
    required,
    disabled,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: controlStyle,
    ...register(name, { validate: (value) => validateField(field, value) }),
  };
  return (
    <div className={`min-w-0 space-y-2 ${name === 'message' ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={id} className="block text-sm font-semibold text-white">
        {label}
        {!required && (
          <span className="ml-2 text-xs font-normal text-slate-400">{CONTACT_FORM.optional}</span>
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
        <p id={errorId} className="text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
