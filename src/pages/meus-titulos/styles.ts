import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;

  max-width: 68.75rem;
  margin: 1.875rem auto 2.5rem;
`;

export const PageSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.875rem 5rem 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  margin-top: 2.25rem;

  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const PurchasesList = styled.div`
  margin-top: 2rem;

  max-width: 56.25rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.25rem;
  grid-row-gap: 3.25rem;
`;

export const Purchase = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RaffleRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RaffleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RaffleTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const RaffleText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const PurchasedTitleContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const PurchaseInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.9375rem 1.25rem;
`;

export const InformationItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.9375rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
`;

export const NumbersContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  padding: 0.75rem;

  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
`;

export const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.125rem, 1fr));
  grid-gap: 1.5rem;
`;

interface NumberProps {
  isActive?: boolean;
}

export const NumberText = styled.p<NumberProps>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.white};

  width: 100%;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.4375rem;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.gray2f};
  font-weight: 500;
  font-size: 1rem;
`;

export const ObservationSection = styled.section`
  margin-top: 2.5rem;

  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.25rem 5rem 1.5rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

export const ObservationTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #04091c;
`;

export const ObservationText = styled.p`
  margin-top: 0.625rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: #04091c;
`;

export const EmptyContent = styled.div`
  width: 100%;
  min-height: 60vh;
  max-width: 18.75rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.grayb9};
    font-size: 5rem;
  }
`;

export const EmptyTitle = styled.h2`
  margin-top: 1.25rem;

  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const EmptyText = styled.p`
  margin-top: 1.25rem;

  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const BuyButton = styled.button`
  border: none;

  margin-top: 5rem;

  background: ${({ theme }) => theme.colors.green};
  min-height: 3.75rem;
  width: 100%;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
