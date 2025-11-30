import * as React from 'react';
import { type DateRange } from 'react-day-picker';

import { parseDate } from 'chrono-node';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Simple Date Picker
export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  disabled,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="justify-between font-normal"
          >
            {value ? value.toLocaleDateString() : placeholder}
            <ChevronDownIcon className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
            className="rounded-md border-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Date Range Picker
export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  numberOfMonths?: number;
}

export function DateRangePicker({
  value,
  onChange,
  label,
  placeholder = 'Select date range',
  disabled,
  className,
  numberOfMonths = 2,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  const formatRange = (range?: DateRange) => {
    if (!range?.from) return placeholder;
    if (!range.to) return range.from.toLocaleDateString();
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="justify-between font-normal"
          >
            {formatRange(value)}
            <CalendarIcon className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={numberOfMonths}
            className="rounded-md border-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Date of Birth Picker
export interface DateOfBirthPickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DateOfBirthPicker({
  value,
  onChange,
  label = 'Date of birth',
  placeholder = 'Select date',
  disabled,
  className,
}: DateOfBirthPickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className="justify-between font-normal"
          >
            {value ? value.toLocaleDateString() : placeholder}
            <ChevronDownIcon className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
            className="rounded-md border-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Natural Language Date Picker
export interface NaturalLanguageDatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function NaturalLanguageDatePicker({
  value,
  onChange,
  label = 'Schedule Date',
  placeholder = 'Tomorrow or next week',
  disabled,
  className,
}: NaturalLanguageDatePickerProps) {
  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    value ? formatDate(value) : ''
  );
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [month, setMonth] = React.useState<Date | undefined>(date);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const parsedDate = parseDate(e.target.value);
    if (parsedDate) {
      setDate(parsedDate);
      setMonth(parsedDate);
      onChange?.(parsedDate);
    }
  };

  const handleCalendarSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setInputValue(formatDate(selectedDate));
    onChange?.(selectedDate);
    setOpen(false);
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <Label>{label}</Label>}
      <div className="relative">
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          disabled={disabled}
          className="pr-10"
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              disabled={disabled}
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <CalendarIcon className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              onSelect={handleCalendarSelect}
              captionLayout="dropdown"
              className="rounded-md border-0"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
