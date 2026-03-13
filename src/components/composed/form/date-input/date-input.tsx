'use client';

import React, { forwardRef, useState } from 'react';

import { cn, safeParseDate, toUtcDateOnlyISOString } from '@/lib/utils';

interface KDateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  className?: string;
  size?: 'sm' | 'default';
}

const KDateInput = forwardRef<HTMLInputElement, KDateInputProps>(
  ({ className, label, onChange, value, size = 'default', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const ISO_DATE_OR_DATETIME_PATTERN = /^\d{4}-\d{2}-\d{2}(?:[T\s].*)?$/;

    const formatISOToDisplay = (isoString: string) => {
      if (!isoString) return '';
      const dateOnlyMatch = isoString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (dateOnlyMatch) {
        const [, year, month, day] = dateOnlyMatch;
        return `${day}/${month}/${year}`;
      }

      try {
        const date = safeParseDate(isoString);
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } catch {
        return '';
      }
    };

    const formatDisplayToISO = (displayDate: string) => {
      if (!displayDate || displayDate.length !== 10) return '';
      const [day, month, year] = displayDate.split('/');
      if (!day || !month || !year || year.length !== 4) return '';
      try {
        const parsedDay = parseInt(day, 10);
        const parsedMonth = parseInt(month, 10);
        const parsedYear = parseInt(year, 10);
        if (
          Number.isNaN(parsedDay) ||
          Number.isNaN(parsedMonth) ||
          Number.isNaN(parsedYear)
        ) {
          return '';
        }

        const date = new Date(parsedYear, parsedMonth - 1, parsedDay);
        if (
          date.getFullYear() !== parsedYear ||
          date.getMonth() !== parsedMonth - 1 ||
          date.getDate() !== parsedDay
        ) {
          return '';
        }

        return toUtcDateOnlyISOString(date);
      } catch {
        return '';
      }
    };

    const displayValue =
      typeof value === 'string' && ISO_DATE_OR_DATETIME_PATTERN.test(value)
        ? formatISOToDisplay(value)
        : (value as string) || '';

    const formatDateInput = (input: string) => {
      const numbers = input.replace(/\D/g, '');

      if (numbers.length <= 2) {
        return numbers;
      } else if (numbers.length <= 4) {
        return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
      } else {
        return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatDateInput(e.target.value);

      const valueToSend =
        formatted.length === 10
          ? formatDisplayToISO(formatted) || formatted
          : formatted;

      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: valueToSend,
        },
      };

      onChange?.(newEvent);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if ([8, 9, 27, 13, 46].includes(e.keyCode)) {
        return;
      }

      if (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) {
        return;
      }

      const isNumber =
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105);

      if (!isNumber) {
        e.preventDefault();
      }
    };

    const hasContent = displayValue.trim().length > 0;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
      <div className="relative">
        <input
          type="text"
          className={cn(
            'k-input bg-secondary-blue-500',
            size === 'sm' ? 'px-3 pb-2 pt-5 h-11' : 'px-4 pb-2.5 pt-6 h-[52px]',
            className
          )}
          ref={ref}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder=""
          maxLength={10}
          value={displayValue}
          aria-labelledby={`floating-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
          autoComplete="off"
        />
        <label
          id={`floating-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
          htmlFor={props.id}
          className={cn(
            'text-sm text-primary-blue-100 absolute transition-all duration-200 pointer-events-none',
            size === 'sm' ? 'left-3' : 'left-4',
            isFocused || hasContent
              ? size === 'sm'
                ? 'top-1.5 text-[10px]'
                : 'top-1.5 text-xs'
              : size === 'sm'
                ? 'top-2.5 text-sm scale-90'
                : 'top-3.5 text-sm scale-100'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

KDateInput.displayName = 'KDateInput';

export { KDateInput };
