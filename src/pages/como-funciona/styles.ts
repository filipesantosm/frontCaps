import Link from 'next/link';
import styled from 'styled-components';

export const Banner = styled.img`
  width: 100%;
  height: 10.75rem;

  object-fit: cover;
  object-position: 50% 10%;
`;

export const PageContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 0 auto 2.5rem;
`;

export const HowItWorksSection = styled.section`
  margin-top: 2.5rem;

  padding: 2.5rem 3.75rem 1.75rem 2.875rem;

  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const CardsList = styled.div`
  margin-top: 1.25rem;

  width: 100%;

  display: flex;
  gap: 1.25rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const CardsColumn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.75rem;

  border: 3px solid #e4eef7;
  border-radius: 0.625rem;

  padding: 2.5rem 1.875rem;
`;

export const CardImage = styled.img`
  width: 6.875rem;
  min-width: 6.875rem;
  height: 6.875rem;

  object-fit: contain;
`;

export const CardText = styled.p`
  width: 100%;
  max-width: 16.875rem;

  font-size: 1rem;
  line-height: 1.5;
  color: #00214b;
`;

export const HelpTitle = styled.h2`
  margin-top: 2.5rem;

  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const HelpText = styled.p`
  margin-top: 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const HelpLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  font-weight: 400;
`;
