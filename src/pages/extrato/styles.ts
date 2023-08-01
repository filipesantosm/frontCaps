import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  min-height: 75vh;
  max-width: 68.75rem;
  margin: 1.875rem auto 2.5rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.875rem 5rem 2.5rem 2.5rem;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  &:nth-child(1) {
    max-width: 32rem;
  }

  &:nth-child(3) {
    max-width: 18.75rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    &:nth-child(1) {
      max-width: unset;
    }

    &:nth-child(3) {
      max-width: unset;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ColumnTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Separator = styled.div`
  margin-top: 3.5rem;

  width: 1px;
  background: ${({ theme }) => theme.colors.grayb9};
`;

export const TabSelector = styled.div`
  margin-top: 1.875rem;

  display: flex;
`;

interface TabButtonProps {
  isActive?: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.white};
  min-height: 2.5rem;
  width: 100%;
  max-width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.primary};

  transition: all 0.3s;

  &:nth-child(1) {
    border-top-left-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;
  }

  &:nth-child(2) {
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }
`;

export const PurchaseTableWrapper = styled.div`
  margin-top: 1.875rem;

  width: 100%;
`;

const purchaseGridColumns = '1.25fr 0.9fr 1fr 0.75fr';

export const PurchaseHeader = styled.div`
  padding-right: 2.125rem;

  display: grid;

  grid-template-columns: ${purchaseGridColumns};
`;

export const PurchaseHeaderText = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
  letter-spacing: 0.04em;

  padding-left: 0.9375rem;
`;

export const PurchaseList = styled.div`
  width: 100%;
  max-height: 32vh;
  overflow: auto;

  padding-right: 1.25rem;

  display: flex;
  flex-direction: column;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 transparent;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 20px;
    background: #d6d6d6;
  }
`;

export const PurchaseItem = styled.div`
  margin-top: 0.625rem;

  display: grid;
  grid-template-columns: ${purchaseGridColumns};
  align-items: center;

  min-height: 3rem;
  border-radius: 0.3125rem;
  background: #fafafa;
`;

export const PurchaseText = styled.p`
  padding-left: 0.9375rem;

  font-size: 0.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
  letter-spacing: 0.04em;
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

export const BalanceCardTitle = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const BalanceCardValue = styled.p`
  width: 8.125rem;
  height: 3.5rem;

  background: #fafafa;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const AddBalanceButton = styled.button`
  border: none;

  margin-top: 1.25rem;

  width: 100%;
  max-width: 18.75rem;
  min-height: 2.5rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 600;

  svg {
    font-size: 1.125rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const BalanceDescription = styled.p`
  margin-top: 2.5rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
  line-height: 1.5rem;
`;
