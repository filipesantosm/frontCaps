import { ScratchCardStatus } from '@/interfaces/ScratchCard';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 33, 75, 0.44);

  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 0 5rem;

  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.div``;

export const PaginationContainer = styled.div`
  margin: 1rem auto;

  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

interface PaginationItemProps {
  status: ScratchCardStatus;
  isActive: boolean;
}

export const PaginationItem = styled.button<PaginationItemProps>`
  border: none;

  background: ${({ theme }) => theme.colors.white};
  width: 3.6875rem;
  height: 3.6875rem;
  border-radius: 0.4375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};

  ${({ isActive, status }) =>
    isActive &&
    status === 'unscratched' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}

  ${({ status }) =>
    status === 'win' &&
    css`
      background: #f5c12e;
      color: #4b0106;
    `}

  ${({ status }) =>
    status === 'lose' &&
    css`
      background: ${({ theme }) => theme.colors.gray74};
      color: ${({ theme }) => theme.colors.grayb9};
    `}
`;

export const NavigationButton = styled.button`
  border: none;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  transition: filter 0.3s;

  &:hover {
    &:not(:disabled) {
      filter: brightness(0.9);
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grayb9};
  }
`;
