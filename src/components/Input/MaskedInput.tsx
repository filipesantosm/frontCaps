/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import {
  InputContainer,
  InputLabel,
  StyledInput,
  ErrorMessage,
} from './styles';

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maskFunction: (value: string) => string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
  errorClassName?: string;
}

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      id,
      label,
      error,
      maskFunction,
      onChange,
      labelClassName,
      containerClassName,
      errorClassName,
      ...rest
    },
    ref,
  ) => {
    const handleMask = (event: React.ChangeEvent<HTMLInputElement>) => {
      const masked = maskFunction(event.target.value);
      event.target.value = masked;
      onChange(event);
    };

    return (
      <InputContainer className={containerClassName} hasError={!!error}>
        {label && (
          <InputLabel className={labelClassName} htmlFor={id}>
            {label}
          </InputLabel>
        )}
        <StyledInput
          id={id}
          {...rest}
          onChange={event => handleMask(event)}
          ref={ref}
          hasError={!!error}
        />
        {error && (
          <ErrorMessage className={errorClassName}>{error}</ErrorMessage>
        )}
      </InputContainer>
    );
  },
);

export default MaskedInput;
