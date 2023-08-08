import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin: 1.375rem 0 3.4375rem;

  padding: 2rem 3rem 2.25rem 3.4375rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};

  svg {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const ProgressBarContainer = styled.div`
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray74};

  p:first-child {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const ProgressBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  margin-top: 0.875rem;

  width: 100%;
  height: 13px;

  border-radius: 6px;

  position: relative;

  background: ${({ theme }) => theme.colors.error10};

  &::after {
    content: '';
    position: absolute;
    border-radius: 6px;
    height: 13px;
    left: 0;

    transition: max-width 0.95s linear;
    width: 100%;
    max-width: ${({ progress }) => `${Math.min(100, progress)}%`};
    background: ${({ theme }) => theme.colors.error};
  }
`;

interface StatusProps {
  isPaid?: boolean;
}

export const PixStatus = styled.div<StatusProps>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme, isPaid }) =>
    isPaid ? theme.colors.green : theme.colors.error};

  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    font-size: 1.75rem;
  }
`;

export const LoadingIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @keyframes fade {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0.1;
    }
  }

  animation: fade 2s linear infinite;
`;

export const QrCodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};

  word-break: break-word;
`;

export const QrCodeImage = styled.img`
  width: 9.1875rem;
  height: 9.1875rem;

  object-fit: contain;
`;

export const CopyCodeButton = styled.button`
  border: none;

  width: 100%;
  min-height: 3rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8125rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
