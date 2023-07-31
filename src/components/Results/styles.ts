import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 1.25rem;

  background: ${({ theme }) => theme.colors.white};

  padding: 2.25rem 2.625rem 4.375rem 2.625rem;
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultsTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const EditionHeader = styled.div`
  margin-top: 1rem;

  width: 100%;
  min-height: 3.875rem;
  background: ${({ theme }) => theme.colors.primaryTwo};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-weight: 700;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
`;

export const ResultItem = styled.article`
  width: 95%;
  margin: 0 auto;
  margin-top: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & + & {
    margin-top: 5rem;
  }
`;

export const ItemTop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.875rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

interface PrizeProps {
  isMainPrize?: boolean;
}

export const PrizeContainer = styled.div<PrizeProps>`
  width: 100%;
  max-width: 18.875rem;

  background: ${({ theme }) => theme.colors.grayf3};

  border-radius: 0.625rem;
`;

export const PrizeIndex = styled.div<PrizeProps>`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ isMainPrize, theme }) =>
    isMainPrize ? theme.colors.white : '#f5c12e'};

  border: 2px solid #f5c12e;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;

  background: ${({ isMainPrize }) => (isMainPrize ? '#f9d67a' : 'transparent')};

  padding: 0.75rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrophyImage = styled.img`
  margin-right: 0.75rem;

  width: 1.75rem;
  height: 1.75rem;
  object-fit: cover;
`;

export const Prize = styled.div<PrizeProps>`
  border: 2px solid
    ${({ theme, isMainPrize }) =>
      isMainPrize ? '#f5c12e' : theme.colors.grayb9};
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  border-top: none;

  width: 100%;

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PrizeName = styled.p<PrizeProps>`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme, isMainPrize }) =>
    isMainPrize ? '#f5c12e' : theme.colors.gray74};
`;

export const PrizeLiquidValue = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const SelectedNumbersContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
  grid-gap: 1.125rem;
`;

export const SelectedNumber = styled.p`
  background: ${({ theme }) => theme.colors.grayf3};
  color: ${({ theme }) => theme.colors.gray2f};
  font-weight: 500;
  font-size: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  border-radius: 7px;
`;

export const ItemWinner = styled.div`
  width: 100%;
  border-radius: 0.625rem;

  padding: 1.25rem 0;

  background: ${({ theme }) => theme.colors.grayf3};

  border: 2px solid #e4eef7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WinnerName = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryTwo};
`;

export const WinnerCertificateSection = styled.div`
  margin-top: 1.25rem;

  display: flex;
  align-items: center;
  gap: 3.125rem;
`;

export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CertificateTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const CertificateText = styled.p`
  margin-top: 0.625rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const SpecialPrizeContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const SpecialPrizeHeader = styled.div`
  background: ${({ theme }) => theme.colors.primaryTwo};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.375rem;
  font-weight: 700;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;

  padding: 0.75rem;
`;

export const SpecialPrizeBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;

  background: ${({ theme }) => theme.colors.grayf3};

  border: 2px solid ${({ theme }) => theme.colors.grayb9};
  border-top: none;
`;

export const SpecialPrizeName = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const SpecialPrizeDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const SpecialWinnerList = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 1.25rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  grid-gap: 2.5rem;
`;

export const SpecialWinner = styled.article`
  width: 100%;
  max-width: 29rem;
  height: 100%;

  border: 2px solid #e4eef7;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.grayf3};

  padding: 1.25rem 1.875rem;

  @media (max-width: 800px) {
    max-width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SpecialWinnerBottom = styled.div`
  margin-top: 1.25rem;

  display: flex;
  gap: 3rem;
`;
