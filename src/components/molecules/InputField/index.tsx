import React, { FC, forwardRef } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Label, FormError, Input } from '../../atoms';
import { InputContainer } from './styles';

interface IInputProps {
  icon?: IconDefinition;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  disabled?: boolean;
  error?: string;
  value?: string;
}

export const InputField: FC<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(
  (
    { icon, label, type = 'text', disabled = false, value, error, ...props },
    ref,
  ) => {
    return (
      <InputContainer>
        {label ? <Label text={label} /> : null}
        <Input
          inputRef={ref}
          error={error}
          icon={icon}
          type={type}
          disabled={disabled}
          value={value}
          {...props}
        />
        {error ? <FormError text={error} /> : null}
      </InputContainer>
    );
  },
);
