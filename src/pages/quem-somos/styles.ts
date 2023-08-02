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

export const WhoAreWeSection = styled.section`
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

export const Text = styled.p`
  margin-top: 1.875rem;

  font-size: 1rem;
  font-weight: 400;
  color: #00214b;
  line-height: 1.5;
  white-space: pre-line;
`;
