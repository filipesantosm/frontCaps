import styled from 'styled-components';

interface InputProps {
  hasError?: boolean;
}

export const InputContainer = styled.div<InputProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 5px;

  padding: 0.375rem 1.5rem 0.75rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : 'transparent')};

  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.error : theme.colors.primary};
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 0.4375rem;

  font-size: 0.875rem;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: #b2b4c9;
`;

export const StyledInput = styled.input<InputProps>`
  border: none;

  min-width: 0px;
  width: 100%;

  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #30375c;
  background-color: transparent;

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

export const ShowPasswordButton = styled.button`
  border: none;
  background: transparent;

  position: absolute;
  right: 1rem;
  bottom: 0.75rem;

  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #717692;
  font-size: 1.875rem;

  transition: color 0.3s;

  &:hover {
    color: #55a3d4;
  }
`;
