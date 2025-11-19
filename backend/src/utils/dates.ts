// UTC date utilities using date-fns
// All timestamps stored as TIMESTAMPTZ in PostgreSQL

import { addMinutes, formatISO, isBefore } from 'date-fns';

export function getCurrentUTCDate(): Date {
  return new Date();
}

export function formatAsUTCISO(date: Date): string {
  return formatISO(date);
}

export function addMinutesUTC(date: Date, minutes: number): Date {
  return addMinutes(date, minutes);
}

export function isBeforeUTC(date: Date, dateToCompare: Date): boolean {
  return isBefore(date, dateToCompare);
}
