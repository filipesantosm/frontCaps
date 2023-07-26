import Link from 'next/link';
import styled from 'styled-components';

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
`;

export const UserContainer = styled.div``;

export const UserButton = styled.button``;

interface UserLinksProps {
  isOpen: boolean;
}

export const UserLinks = styled.div<UserLinksProps>``;

export const UserLink = styled(Link)``;
