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
  margin: 2.5rem auto;
`;

export const HelpSection = styled.section`
  margin-top: 2.5rem;

  padding: 2.5rem 3.75rem 1.75rem 2.875rem;

  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const HelpTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const HelpSectionBanner = styled.img`
  margin-top: 2.5rem;

  width: 100%;
`;

export const SearchTitle = styled.h2`
  margin-top: 2.5rem;

  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const Separator = styled.div`
  margin-top: 2.5rem;
`;
