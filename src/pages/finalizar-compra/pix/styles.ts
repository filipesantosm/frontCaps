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

export const PixPaymentContainer = styled.div`
  width: 100%;
  padding: 2.25rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const PixPaymentContent = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 24.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PixPaymentTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
`;

export const PixPaymentDescription = styled.p`
  margin-top: 2rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const ContinueButton = styled.button`
  border: none;

  margin-top: 2.5rem;

  background: ${({ theme }) => theme.colors.green};
  min-height: 2.8125rem;
  width: 100%;
  max-width: 18.75rem;
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
