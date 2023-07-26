import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.75rem 5.625rem 1.75rem 2.25rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  background: ${({ theme }) => theme.colors.white};
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-weight: 700;
  letter-spacing: 0.053em;
  // TODO: theme;
  color: #00214b;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BuyButton = styled.button`
  border: none;

  min-height: 2.8125rem;
  padding-left: 1rem;
  border-radius: 0.625rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  align-items: center;
  background: #32b85b;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 400;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CartIconWrapper = styled.div`
  margin-left: 1.5rem;

  width: 4rem;
  min-height: 2.8125rem;
  border-top-right-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background: #34d665;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryTwo};
`;

export const CountdownContainer = styled.div`
  margin-top: 0.75rem;

  font-size: 1.75rem;

  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const CountdownItem = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.primaryTwo};

  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
