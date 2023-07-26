import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 5.375rem;

  background: ${({ theme }) => theme.colors.grayf3};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.37);

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 3.125rem;
  height: 2.9375rem;
  object-fit: contain;
`;

export const Nav = styled.nav`
  margin-left: 2.5rem;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;

  padding: 0rem 1rem;
  min-height: 2.8125rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.grayf3};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
