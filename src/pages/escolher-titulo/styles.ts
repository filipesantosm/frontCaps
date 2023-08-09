import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 2.5rem auto 2.5rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #00214b;
`;

export const GoBackButton = styled.button`
  border: none;

  width: fit-content;
  padding: 0.5rem 1.3125rem 0.5625rem 1.125rem;
  border-radius: 0.3125rem;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const ChooseNumbersLabel = styled.label`
  margin-top: 2.5rem;

  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  font-size: 1rem;
  font-weight: 400;
  color: #00214b;
`;

export const Toggle = styled.input`
  appearance: none;
  width: 2.25rem;
  height: 1.125rem;
  background: #fff;
  border-radius: 2rem;
  border: 1px solid #e7e7e7;

  cursor: pointer;

  &:after {
    content: '';
    width: 1.125rem;
    height: 1.125rem;

    transform: translateX(102%) translateY(-5%);

    display: flex;
    align-items: center;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.grayb9};
    border: none;

    transition: transform 0.2s ease;
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.green};
    &:after {
      width: 1.125rem;
      height: 1.125rem;
      background-color: ${({ theme }) => theme.colors.green};
      transform: translateX(-3%) translateY(-5%);
    }
  }
`;

export const PageBody = styled.div`
  max-width: 62.5rem;
`;

export const NumberInputsContainer = styled.div`
  margin-top: 2.5rem;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const NumberInput = styled.input`
  width: 4rem;
  height: 4rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid transparent;

  color: ${({ theme }) => theme.colors.gray5d};
  font-size: 1.875rem;
  font-weight: 400;

  text-align: center;

  transition: border-color 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayb9};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FinishPurchaseButton = styled.button`
  border: none;

  margin-left: auto;

  min-height: 3.75rem;
  padding: 0 2.375rem;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 0.625rem;

  display: flex;
  align-items: center;

  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CardList = styled.div`
  margin-top: 2.5rem;

  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

export const Card = styled.article`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  overflow: hidden;

  width: 100%;
  max-width: 20rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem 0.625rem 0.625rem 1.25rem;
`;

export const CardHeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeaderText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 400;
`;

interface CartButtonProps {
  isInCart: boolean;
}

export const CartButton = styled.button<CartButtonProps>`
  border: none;

  background: ${({ isInCart, theme }) =>
    isInCart ? theme.colors.error : theme.colors.green};
  width: 3.875rem;
  height: 3.375rem;

  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 0.5625rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  svg {
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CartButtonIcon = styled.img`
  margin-bottom: 0.25rem;

  width: 1.1875rem;
  height: 1.0625rem;

  object-fit: contain;
`;

export const CardBody = styled.div`
  width: fit-content;
  margin: auto;

  padding: 0.625rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.625rem;
`;

interface CardNumberProps {
  isSelectedNumber: boolean;
}

export const CardNumber = styled.div<CardNumberProps>`
  width: 2.125rem;
  height: 2.125rem;

  background: ${({ theme, isSelectedNumber }) =>
    isSelectedNumber ? theme.colors.primary : theme.colors.white};
  border-radius: 7px;

  color: ${({ theme, isSelectedNumber }) =>
    isSelectedNumber ? theme.colors.white : theme.colors.gray2f};
  font-size: 1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
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
