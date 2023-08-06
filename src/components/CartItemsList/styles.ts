import styled from 'styled-components';

export const ItemsList = styled.div`
  min-width: 24rem;

  display: flex;
  flex-direction: column;
`;

export const ItemListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayb9};
`;

export const Items = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  margin-top: 0.875rem;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};

  &:last-of-type {
    margin-bottom: 1rem;
  }

  span {
    margin-right: 1.5rem;
    color: ${({ theme }) => theme.colors.grayb9};
  }
`;

export const TotalValueContainer = styled.div`
  margin-top: 5rem;

  width: 100%;
  padding: 1.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;
