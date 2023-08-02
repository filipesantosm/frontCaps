import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AmountText = styled.p`
  text-align: center;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
`;

export const List = styled.div`
  margin-top: 2.5rem;

  width: 100%;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const ScratchCard = styled.article`
  width: 15.625rem;
  height: 12.5rem;
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.625rem;
  font-weight: 400;

  padding: 0.25rem 0.5rem 0.5rem;

  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const UnscratchedCardContent = styled.div`
  width: 100%;
  flex: 1;
  background: ${({ theme }) => theme.colors.gray74};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.grayb9};
  font-size: 0.875rem;

  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 2.5rem;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray5d};
`;
