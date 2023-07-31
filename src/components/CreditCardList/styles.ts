import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const CardOption = styled.label`
  margin-top: 0.625rem;

  height: 3.4375rem;
  width: 100%;
  padding: 0.875rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};

  display: flex;
  align-items: center;
  gap: 0.625rem;

  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.125rem;
  font-weight: 500;
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
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.75rem;
    font-size: 0.625rem;
    font-family: 'FontAwesome';
    color: transparent !important;
    background: transparent;
    border: 1px solid #00214b;
  }
  &:checked:before {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const AddCardButton = styled.button`
  border: none;

  width: 100%;
  min-height: 2.875rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-size: 0.8125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  svg {
    font-size: 1.25rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
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
