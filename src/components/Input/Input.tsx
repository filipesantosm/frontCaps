/* eslint-disable react/display-name */
import { forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  InputContainer,
  InputLabel,
  StyledInput,
  ErrorMessage,
  ShowPasswordButton,
} from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
  errorClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type,
      label,
      error,
      labelClassName,
      containerClassName,
      errorClassName,
      ...rest
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPassword ? 'text' : type;

    return (
      <InputContainer className={containerClassName} hasError={!!error}>
        {label && (
          <InputLabel className={labelClassName} htmlFor={id}>
            {label}
          </InputLabel>
        )}
        {type === 'password' && (
          <ShowPasswordButton
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            title={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            tabIndex={-1}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </ShowPasswordButton>
        )}
        <StyledInput
          id={id}
          {...rest}
          type={inputType}
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

export default Input;
