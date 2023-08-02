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
  margin: 2.5rem auto;
`;

export const HelpSection = styled.div`
  margin-top: 2.5rem;

  padding: 2.5rem 3.75rem 1.75rem 2.875rem;

  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const QuestionHeader = styled.section`
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 2.5rem;
`;

export const QuestionTitle = styled.h1`
  margin-left: 1.25rem;

  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const QuestionNavigator = styled.nav`
  margin-top: 1.125rem;

  display: flex;
  align-items: center;
  gap: 0.9375rem;

  svg {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const NavigatorLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray2f};
  text-decoration: underline;
`;

export const NavigatorQuestionTitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const QuestionAnswer = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 4.375rem;

  white-space: pre-line;
  word-break: break-word;

  color: ${({ theme }) => theme.colors.gray2f};
  font-size: 1rem;
  line-height: 1.5rem;
`;
