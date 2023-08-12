import Link from 'next/link';
import styled from 'styled-components';

export const Banner = styled.img`
  width: 100%;
  aspect-ratio: 7.95;

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

export const HelpTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const SearchTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const QuestionHeader = styled.section`
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;

  margin-top: 4rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  gap: 0.9375rem;

  color: ${({ theme }) => theme.colors.primaryDark};

  font-size: 1rem;
  font-weight: 500;

  svg {
    font-size: 2.5rem;
  }
`;

export const QuestionsList = styled.div`
  margin-top: 1rem;
  margin-bottom: 4.375rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const QuestionsCard = styled.article`
  width: 100%;
  min-height: 16.5625rem;
  max-width: 19.375rem;
  border-radius: 0.625rem;
  padding: 1.25rem;
  border: 3px solid #e4eef7;
  white-space: pre-line;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const QuestionLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
  text-decoration: none;
  word-break: break-word;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
