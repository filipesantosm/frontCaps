import Link from 'next/link';
import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 0 auto 2.5rem;
`;

export const TopSection = styled.section`
  margin-top: 2.5rem;

  display: flex;
  align-items: stretch;
  gap: 2.5rem;

  margin-bottom: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const PurchaseColumn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SelectsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-bottom: 2rem;
`;

export const ContestImage = styled.img`
  min-width: min(50%, 37.5rem);
  height: 21.875rem;
  object-fit: cover;
  border-radius: 0.625rem;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #00214b;

  margin-bottom: 1.25rem;
`;

export const OptionsContainer = styled.div`
  margin-top: auto;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const OptionsLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray5d};
`;

export const OptionLink = styled(Link)`
  border: none;

  text-decoration: none;

  display: flex;
  align-items: center;

  height: 3.4375rem;
  width: 100%;
  border-radius: 0.625rem;
  overflow: hidden;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const OptionButton = styled.button`
  border: none;
  background: transparent;

  text-decoration: none;

  display: flex;
  align-items: center;

  height: 3.4375rem;
  width: 100%;
  border-radius: 0.625rem;
  overflow: hidden;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LeftButtonContent = styled.div`
  width: 100%;
  height: 100%;

  background: #32b85b;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 1.375rem;

  padding-left: 1.6875rem;

  svg {
    font-size: 1.5rem;
  }
`;

export const ButtonArrow = styled.div`
  width: 4rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  background: #34d665;
`;
