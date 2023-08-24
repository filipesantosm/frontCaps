import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.primaryTwo};
  border-radius: 1.25rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-weight: 700;
`;

export const CardsContainer = styled.div`
  margin-top: 1rem;

  width: fit-content;

  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 16rem;
  border-radius: 0.625rem;
  padding: 1.75rem 1.375rem 1.5625rem;

  background: ${({ theme }) => theme.colors.grayf3};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardValue = styled.p`
  font-size: 3.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
`;

export const CardLabel = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
`;

export const CardDescription = styled.p`
  margin-top: 2rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryDarker};
`;
