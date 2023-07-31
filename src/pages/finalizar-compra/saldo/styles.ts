import { theme as themeObj } from '@/styles/theme';
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

export const BalanceColumn = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;

  padding: 2.25rem 2rem 2.75rem;
`;

export const ColumnContent = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 24rem;
`;

export const ColumnTitle = styled.h2`
  text-align: center;

  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const BalanceCardsContainer = styled.div`
  margin-top: 2.5rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.375rem;
`;

export const BalanceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

interface CardTitleProps {
  hasEnoughBalance?: boolean;
}

export const CardTitle = styled.p<CardTitleProps>`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  color: ${({ theme, hasEnoughBalance }) =>
    hasEnoughBalance ? theme.colors.green : theme.colors.gray2f};
`;

interface CardValueProps {
  textColor?: 'green' | 'red' | 'gray';
}

const cardValueColors = {
  green: themeObj.colors.green,
  red: themeObj.colors.error,
  gray: themeObj.colors.gray74,
};

export const CardValue = styled.p<CardValueProps>`
  width: 10.6875rem;
  height: 4.75rem;

  background: #fafafa;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 1.3125rem;
  font-weight: 500;
  color: ${({ textColor }) => cardValueColors[textColor || 'gray']};
`;

export const BalanceDescription = styled.p`
  margin-top: 1.875rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
  line-height: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FilledButton = styled.button`
  border: none;

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

export const OutlinedButton = styled(FilledButton)`
  color: ${({ theme }) => theme.colors.green};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.green};
`;
