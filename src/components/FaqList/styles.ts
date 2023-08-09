import Link from 'next/link';
import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-top: 3.75rem;

  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const List = styled.div`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const Item = styled.article`
  width: 100%;
  min-height: 16.5625rem;
  max-height: 16.5625rem;
  max-width: 19.375rem;
  border-radius: 0.625rem;
  padding: 1.25rem;
  border: 3px solid #e4eef7;
  white-space: pre-line;

  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const QuestionList = styled.div`
  flex: 1;

  max-height: 65%;
  overflow: hidden;
  text-overflow: ellipsis;

  display: flex;
  flex-direction: column;
`;

export const QuestionLink = styled(Link)`
  margin-top: 0.9375rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
  word-break: break-word;
  text-decoration: none;
  text-overflow: ellipsis;
`;

export const MoreArticlesLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: auto;

  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const LoadMoreButton = styled.button`
  border: none;

  margin: 2.5rem auto;
  min-height: 3.125rem;
  width: 20rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
