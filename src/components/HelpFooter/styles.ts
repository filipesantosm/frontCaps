import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  padding-top: 1.875rem;

  border-top: 1px solid ${({ theme }) => theme.colors.grayb9};
`;

export const Content = styled.div`
  max-width: 25rem;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & + & {
    margin-top: 2.5rem;
  }
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.375rem;
  font-weight: 500;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray74};

  strong {
    font-weight: 700;
  }
`;

export const SectionLink = styled(Link)`
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 400;
  font-size: 1rem;
`;
