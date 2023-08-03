import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const StyledButton = styled.button`
  border: none;

  min-height: 2.8125rem;
  width: 100%;
  min-width: 8rem;
  border-radius: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RegisterButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;

export const LoginButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  svg {
    font-size: 1.25rem;
  }
`;

interface UserDropdownProps {
  isOpen: boolean;
}

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 2.8125rem;
`;

export const DropdownContainer = styled.div<UserDropdownProps>`
  position: absolute;
  right: 0;

  border-radius: 0.625rem;
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.white : theme.colors.grayf3};
  border: 2px solid
    ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : 'transparent')};

  transition: all 0.2s;
`;

export const DropdownButton = styled.button<UserDropdownProps>`
  position: relative;
  top: -1px;

  border: none;

  min-width: 100%;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  width: fit-content;
  padding: 0rem 0.75rem 0rem 1rem;
  min-height: 2.8125rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.colors.primaryTwo};

  svg {
    &:nth-child(1) {
      font-size: 1.25rem;
    }

    &:nth-child(3) {
      font-size: 1rem;
      transition: transform 0.2s;

      transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'unset')};
    }
  }

  transition: filter 0.3s;

  &:hover {
    filter: ${({ isOpen }) => (isOpen ? 'unset' : 'brightness(0.9)')};
  }
`;

export const UserName = styled.p`
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const DropdownList = styled.div<UserDropdownProps>`
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
      max-height: 13.75rem;
      overflow: visible;
      padding: 0 0 0.75rem;
      padding-top: 0.625rem;
      opacity: 1;
      visibility: visible;
    `}
`;

export const DropdownLink = styled(Link)`
  padding: 0 1rem;

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

export const DropdownItemButton = styled.button`
  border: none;
  background: transparent;

  padding: 0 1rem;

  text-align: left;

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
