'use client';

import { forwardRef } from 'react';
import PhoneInputBase, { type Value } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export type PhoneInputValue = Value;

export interface PhoneInputProps
  extends Omit<React.ComponentProps<typeof PhoneInputBase>, 'onChange'> {
  onChange: (value?: Value) => void;
}

const CustomPhoneInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    onFocus={(event) => {
      props.onFocus?.(event);
      requestAnimationFrame(() => {
        event.target.setSelectionRange(
          event.target.value.length,
          event.target.value.length
        );
      });
    }}
  />
));

CustomPhoneInput.displayName = 'CustomPhoneInput';

export function PhoneInput({
  className,
  countrySelectProps,
  defaultCountry,
  international,
  withCountryCallingCode,
  smartCaret,
  inputComponent,
  ...props
}: PhoneInputProps) {
  return (
    <PhoneInputBase
      {...props}
      defaultCountry={defaultCountry ?? 'IN'}
      international={international ?? true}
      withCountryCallingCode={withCountryCallingCode ?? true}
      smartCaret={smartCaret ?? false}
      className={`peer ${className ?? 'input-phone'}`}
      countrySelectProps={{
        className: 'country-select',
        tabIndex: -1,
        ...countrySelectProps,
      }}
      inputComponent={inputComponent ?? CustomPhoneInput}
    />
  );
}
