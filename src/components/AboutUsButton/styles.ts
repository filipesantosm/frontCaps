import Link from 'next/link';
import styled, { css } from 'styled-components';

interface AboutContainerProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  width: 8.25rem;
  min-height: 2.8125rem;
`;

export const Container = styled.div<AboutContainerProps>`
  position: absolute;
  top: 0;
  width: 100%;

  border-radius: 0.625rem;
  border: 1px solid
    ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : 'transparent')};
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.white : theme.colors.grayf3};

  transition: all 0.2s;
`;

export const ToggleButton = styled.button<AboutContainerProps>`
  border: none;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;

  width: 100%;
  padding: 0rem 0.75rem;
  min-height: 2.8125rem;
  border-radius: 0.5rem;

  background: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.white : theme.colors.grayf3};

  svg {
    transition: transform 0.2s;

    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'unset')};
  }

  transition: filter 0.3s;

  &:hover {
    filter: ${({ isOpen }) => (isOpen ? 'unset' : 'brightness(0.9)')};
  }
`;

export const Links = styled.div<AboutContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.white};

  max-height: 0px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  transition: all 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 12.75rem;
      overflow: visible;
      padding: 0 0 0.75rem;
      opacity: 1;
      visibility: visible;
    `}
`;

export const StyledLink = styled(Link)`
  padding: 0 0.625rem;

  font-family: Segoe UI, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: 2px underline transparent;
  text-underline-offset: 2px;

  transition: text-decoration 0.3s;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
