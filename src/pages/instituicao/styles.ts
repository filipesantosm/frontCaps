import styled from 'styled-components';

export const Banner = styled.img`
  width: 100%;
  height: 10.75rem;

  object-fit: cover;
  object-position: 50% 10%;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 68.75rem;
  margin: 0 auto 2.5rem;
`;

export const NextRaffleWrapper = styled.div`
  position: relative;
  z-index: 2;

  margin-top: -5rem;

  width: 100%;
`;

export const PrivacyPolicySection = styled.section`
  margin-top: 2.5rem;

  padding: 2rem 3.75rem 4rem 2.875rem;

  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const InstitutionBanner = styled.img`
  width: 100%;
  height: 11.625rem;

  object-fit: cover;

  border-radius: 1.25rem;
`;

export const InstitutionNameContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const InstitutionLogo = styled.img`
  width: 6.625rem;
  height: 6.625rem;
  object-fit: cover;
`;

export const InstitutionName = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const Text = styled.p`
  margin-top: 2.5rem;

  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 400;
  color: #00214b;
  line-height: 1.5;
  white-space: pre-line;
`;
