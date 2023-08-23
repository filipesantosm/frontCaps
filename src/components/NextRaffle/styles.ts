import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 2;

  margin-top: -5rem;

  width: 100%;
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 5.625rem 1.25rem 2.25rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 800px) {
    padding-right: 2rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.label`
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
    &:not(:disabled) {
      filter: brightness(0.9);
    }
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
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
  font-size: 1.5rem;
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
  margin-top: 0.625rem;

  font-size: 1.75rem;

  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

export const CountdownItem = styled.div`
  width: 3.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const CountdownPoints = styled.p`
  align-self: baseline;
`;

export const CountdownUnit = styled.p`
  font-size: 0.75rem;
`;

export const CountdownValue = styled.span`
  min-width: 2.875rem;
  padding: 0 0.25rem;
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
