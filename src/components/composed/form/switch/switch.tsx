'use client';

import { Switch as BaseSwitch } from '@/components/ui/switch';

interface SwitchProps {
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  labelClass?: string;
}

export function Switch({
  label,
  checked,
  onCheckedChange,
  labelClass,
}: SwitchProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <BaseSwitch
        id={label}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      {label && (
        <label
          htmlFor={label}
          className={`text-sm text-white font-normal leading-normal cursor-pointer ${labelClass}`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
