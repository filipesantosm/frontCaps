import styled from 'styled-components';

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

export const VideoWrapper = styled.div`
  width: 100%;
  height: 8.875rem;
  object-fit: cover;
  object-position: top;

  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;

  iframe {
    width: 100%;
    border-top-right-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
    overflow: hidden;
  }
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
