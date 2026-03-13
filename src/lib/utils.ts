import type { DateRange } from 'react-day-picker';

import { type ClassValue, clsx } from 'clsx';
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
} from 'date-fns';
import { twMerge } from 'tailwind-merge';

const ISO_DATE_ONLY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ISO_DATETIME_PATTERN = /^\d{4}-\d{2}-\d{2}[T\s]\d{2}:\d{2}/;
const ISO_TIMEZONE_PATTERN = /(Z|[+-]\d{2}:?\d{2})$/i;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDateRange(preset: string): DateRange | undefined {
  const today = new Date();

  switch (preset) {
    case 'Today':
      return { from: today, to: today };
    case 'Yesterday':
      return { from: subDays(today, 1), to: subDays(today, 1) };
    case 'This Week':
      return { from: startOfWeek(today), to: endOfWeek(today) };
    case 'Last Week':
      return {
        from: startOfWeek(subDays(today, 7)),
        to: endOfWeek(subDays(today, 7)),
      };
    case 'Past Two Weeks':
      return { from: subDays(today, 14), to: today };
    case 'This Month':
      return { from: startOfMonth(today), to: endOfMonth(today) };
    case 'Last Month':
      return {
        from: startOfMonth(subDays(today, 30)),
        to: endOfMonth(subDays(today, 30)),
      };
    case 'This Year':
      return { from: startOfYear(today), to: endOfYear(today) };
    case 'Last Year':
      return {
        from: startOfYear(subDays(today, 365)),
        to: endOfYear(subDays(today, 365)),
      };
    default:
      return undefined;
  }
}

export const formatDayWithLeadingZero = (day: Date): string => {
  const dayNumber = day.getDate();
  return dayNumber.toString().padStart(2, '0');
};

export const formatFieldName = (field: string): string => {
  return field
    .replace(/([A-Z])/g, ' $1')
    .replace(/([a-z])([0-9])/g, '$1 $2')
    .replace(/^[a-z]/, (char) => char.toUpperCase());
};

export function searchItems<T extends Record<string, unknown>>(
  items: T[],
  term: string,
  getSearchableValues?: (item: T) => string[]
): T[] {
  if (!term.trim()) return items;
  return items.filter((item) => {
    const searchableValues = getSearchableValues
      ? getSearchableValues(item)
      : (Object.values(item).filter(
          (value) => typeof value === 'string'
        ) as string[]);
    return searchableValues.some((value) =>
      value.toLowerCase().includes(term.toLowerCase())
    );
  });
}

export const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning 💪🏼';
  if (hour >= 12 && hour < 17) return 'Good afternoon ☀️';
  if (hour >= 17 && hour < 21) return 'Good evening 🌙';
  return 'Good night 💤';
};

export function base64ToFile(base64String: string, fileName: string): File {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });
  return new File([blob], fileName, { type: 'image/png' });
}

export const getProfilePictureSrc = (
  profilePicture?: string | File | null,
  photoPath?: string | null
) => {
  const source = profilePicture || photoPath;
  if (!source) return undefined;
  if (typeof source === 'string') {
    if (source.startsWith('http') || source.startsWith('data:image')) {
      return source;
    }
    return `data:image/png;base64,${source}`;
  }
  return URL.createObjectURL(source);
};

export const safeParseDate = (
  dateValue: string | number | Date | null | undefined
): Date | undefined => {
  if (dateValue === null || dateValue === undefined || dateValue === '') {
    return undefined;
  }

  if (dateValue instanceof Date) {
    return Number.isNaN(dateValue.getTime()) ? undefined : new Date(dateValue);
  }

  if (typeof dateValue === 'number') {
    const date = new Date(dateValue);
    return Number.isNaN(date.getTime()) ? undefined : date;
  }

  try {
    const normalizedValue = dateValue.trim();
    if (!normalizedValue) return undefined;

    const needsUtcSuffix =
      ISO_DATETIME_PATTERN.test(normalizedValue) &&
      !ISO_TIMEZONE_PATTERN.test(normalizedValue);
    const normalizedIsoString = ISO_DATE_ONLY_PATTERN.test(normalizedValue)
      ? `${normalizedValue}T00:00:00Z`
      : needsUtcSuffix
        ? `${normalizedValue.replace(' ', 'T')}Z`
        : normalizedValue;

    const date = new Date(normalizedIsoString);
    return !isNaN(date.getTime()) ? date : undefined;
  } catch {
    return undefined;
  }
};

export const toUtcDateOnlyISOString = (
  dateValue: Date | string | null | undefined
): string => {
  const date = safeParseDate(dateValue);
  if (!date) return '';

  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  ).toISOString();
};

export const safeFormatDate = (
  dateValue: string | null | undefined,
  locale: string = 'en-GB',
  fallback: string = 'N/A'
): string => {
  const date = safeParseDate(dateValue);
  return date ? new Intl.DateTimeFormat(locale).format(date) : fallback;
};

export const formatDateTime = (
  isoString: string,
  format: 'date' | 'time' | 'both' = 'both'
): string => {
  try {
    const date = new Date(isoString);
    if (format === 'date') {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
    if (format === 'time') {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return isoString;
  }
};

export const calculateAge = (dob: string): number => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export const calculateDaysRemaining = (targetDate: string): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  return Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
};

export const formatAmount = (amount: number): string => {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
};
