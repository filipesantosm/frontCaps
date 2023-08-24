import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 2.5rem auto;
`;

export const TopSection = styled.section`
  margin-top: 1.25rem;

  display: flex;

  gap: 3rem;

  padding-bottom: 3.5rem;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const PaymentMethodContainer = styled.div`
  width: 100%;
  padding: 2.25rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const PaymentMethodList = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 18.375rem;
`;

export const PaymentMethodTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
`;

export const PaymentMethodOption = styled.label`
  margin-top: 0.625rem;

  min-height: 3rem;
  width: 100%;
  padding: 0.875rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};

  display: flex;
  align-items: center;
  gap: 0.625rem;

  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
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
    border: 1px solid ${({ theme }) => theme.colors.primaryDarker};
  }
  &:checked:before {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ContinueButton = styled.button`
  border: none;

  margin-top: 2.5rem;

  background: ${({ theme }) => theme.colors.green};
  min-height: 2.8125rem;
  width: 100%;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
