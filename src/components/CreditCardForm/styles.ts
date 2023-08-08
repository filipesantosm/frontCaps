import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  margin-top: 2rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > * {
    background: #fafafa;
  }
`;

export const CheckboxContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};

  margin-top: 2rem;
  margin-right: auto;

  display: flex;
`;

export const Checkbox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  content: none;

  cursor: pointer;

  &:before {
    content: '\f00c';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    font-family: 'FontAwesome';
    color: transparent !important;
    background: transparent;
    border: 1px solid #00214b;
    border-radius: 0.25rem;
  }
  &:checked:before {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: #32b85b;
    border: 1px solid #32b85b;
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.9375rem;

  font-size: 1rem;
  font-weight: 400;

  color: #00214b;

  strong {
    font-weight: 600;
  }
`;

export const ContinueButton = styled.button`
  border: none;

  margin-top: 2.5rem;

  background: ${({ theme }) => theme.colors.green};
  min-height: 4.25rem;
  width: 100%;
  max-width: 21.875rem;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5625rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
