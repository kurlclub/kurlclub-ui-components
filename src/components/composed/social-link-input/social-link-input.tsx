'use client';

import { useEffect, useState } from 'react';

import { Globe } from 'lucide-react';

import { Input, Label } from '@/components/ui';

interface SocialLinkInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export function SocialLinkInput({
  value = '',
  onChange,
  label = 'Website Link',
  placeholder = 'https://www.example.com',
  className,
}: SocialLinkInputProps) {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (value) {
      try {
        new URL(value);
        setIsValid(true);
      } catch {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
    }
  }, [value]);

  return (
    <div className="space-y-2">
      <Label className="text-primary-blue-100 text-sm font-normal leading-normal">
        {label}
      </Label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Globe className="h-5 w-5 text-primary-blue-300" />
        </div>
        <Input
          type="url"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`pl-10 bg-secondary-blue-500 border-secondary-blue-400 text-white placeholder:text-primary-blue-300 h-[52px] ${!isValid ? 'border-alert-red-500' : ''} ${className}`}
        />
      </div>
      {!isValid && value && (
        <p className="text-sm text-alert-red-500">Please enter a valid URL</p>
      )}
    </div>
  );
}
