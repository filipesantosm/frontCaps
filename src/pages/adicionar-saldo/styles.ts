import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

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

export const ChooseAmountContainer = styled.div`
  width: 100%;
  max-width: 33.75rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChooseAmountContent = styled.div`
  width: 90%;
  max-width: 19rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChooseAmountTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const ValidDate = styled.p`
  margin-top: 1.25rem;

  width: 100%;
  background: #fafafa;
  border-radius: 5px;
  padding: 1.125rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.gray2f};
  font-weight: 400;
  font-size: 1rem;
`;

export const AmountsList = styled.div`
  margin-top: 0.625rem;

  width: 100%;
`;

export const AmountItem = styled.label`
  margin-top: 0.625rem;

  min-height: 3rem;
  width: 100%;
  padding: 0.25rem 0.875rem;
  border-radius: 0.3125rem;
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
    border: 1px solid #00214b;
  }
  &:checked:before {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  border: none;

  margin-top: 1.875rem;

  min-height: 3.75rem;
  width: 100%;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.375rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const PaymentInstructionsContainer = styled.div`
  width: 100%;
  max-width: 33.75rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
  padding: 3.25rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const InstructionsList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InstructionItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
  line-height: 1.5rem;
`;

export const InstructionIconWrapper = styled.div`
  min-width: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InstructionIcon = styled.img`
  max-width: 2.5rem;
  max-height: 1.875rem;

  object-fit: contain;
`;

export const BarcodeImage = styled.img`
  width: 7.0625rem;
  height: 3.75rem;
`;

export const BilletCode = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const CopyCodeButton = styled.button`
  border: none;

  width: 100%;
  min-height: 3rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8125rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  margin: 2.5rem auto;

  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  animation: ${rotate} 1s linear infinite;

  font-size: 2rem;
`;
