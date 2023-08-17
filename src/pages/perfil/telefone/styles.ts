import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  max-width: 24rem;
  margin: 1.875rem auto 2.5rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.875rem 2rem 2.5rem 2.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  flex-wrap: wrap;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;

  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;
`;
