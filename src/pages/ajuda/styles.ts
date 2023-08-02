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

export const FaqSectionTitle = styled.h3`
  margin-top: 3.75rem;

  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const FaqList = styled.div`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const FaqItem = styled.article`
  width: 100%;
  min-height: 16.5625rem;
  max-width: 19.375rem;
  border-radius: 0.625rem;
  padding: 1.25rem;
  border: 3px solid #e4eef7;
  white-space: pre-line;

  display: flex;
  flex-direction: column;
`;

export const FaqTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const FaqLink = styled(Link)`
  margin-top: 0.9375rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray2f};
  text-decoration: none;
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

export const VideosContainer = styled.div`
  margin-top: 4.375rem;

  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const VideoItem = styled.article`
  width: 100%;
  max-width: 18.75rem;
  height: 11.875rem;

  border-radius: 0.625rem;
  border: 1px solid #e4eef7;
  background: ${({ theme }) => theme.colors.grayf3};

  display: flex;
  flex-direction: column;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 8.875rem;
  object-fit: cover;
  object-position: top;

  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
`;

export const VideoTitle = styled.p`
  width: 100%;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;

  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2f};
`;
