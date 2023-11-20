import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  z-index: 10;

  width: 100%;
  min-height: 6.375rem;
  padding: 2rem 5rem 0.5rem 0.5rem;

  background: ${({ theme }) => theme.colors.grayf3};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.37);

  display: flex;
  align-items: center;
`;

export const BlackLabel = styled.div`
  position: absolute;
  z-index: 10;

  top: 0;
  left: 0;

  width: 100%;
  min-height: 2rem;

  background: #000;
  display: flex;
  align-items: center;
`;

export const TextoBranco = styled.p`
  color: white;
  margin: auto;
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

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
  
  // estilos existentes
  @media (max-width: 768px) {
    display: ${props => props.open ? 'block' : 'none'};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;

  padding: 0rem 1rem;
  margin: 1rem 0rem;
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

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
  }
`;