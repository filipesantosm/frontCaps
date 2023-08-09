import styled from 'styled-components';

interface TextAreaProps {
  hasError?: boolean;
}

export const TextAreaContainer = styled.div<TextAreaProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 5px;

  padding: 0.375rem 1.5rem 0.75rem;

  background: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : 'transparent')};

  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.primary};
  }
`;

export const TextAreaLabel = styled.label`
  margin-bottom: 0.4375rem;

  font-size: 0.875rem;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: #b2b4c9;
`;

export const StyledTextArea = styled.textarea<TextAreaProps>`
  border: none;

  min-width: 100%;

  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #30375c;
  background: transparent;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayb9};
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.25rem;
  left: 1.5rem;

  color: ${({ theme }) => theme.colors.error};
  font-size: 0.75rem;
  font-weight: 300;
`;
