/* eslint-disable react/display-name */
import { ComponentPropsWithRef, forwardRef } from 'react';
import {
  ErrorMessage,
  StyledTextArea,
  TextAreaContainer,
  TextAreaLabel,
} from './styles';

interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  label?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
  errorClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      error,
      labelClassName,
      containerClassName,
      errorClassName,
      ...rest
    },
    ref,
  ) => {
    return (
      <TextAreaContainer className={containerClassName} hasError={!!error}>
        {label && (
          <TextAreaLabel className={labelClassName} htmlFor={id}>
            {label}
          </TextAreaLabel>
        )}
        <StyledTextArea id={id} {...rest} ref={ref} hasError={!!error} />
        {error && (
          <ErrorMessage className={errorClassName}>{error}</ErrorMessage>
        )}
      </TextAreaContainer>
    );
  },
);

export default TextArea;
