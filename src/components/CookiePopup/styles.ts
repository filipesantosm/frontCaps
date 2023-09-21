import styled from 'styled-components';

export const Container = styled.div`


position: fixed;
z-index: 9999;
inset: 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Content = styled.div`
  border: none;

  padding:1.5rem;
  position: fixed;
  bottom: 2rem;
  z-index: 3;

  min-height: 4.375rem;
  width: fit-content;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.32);

  align-items: center;

  padding-left: 2.25rem;
  padding-right: 2.75rem;

  color: #000;
  font-size: 0.75rem;

  background: #fff;
  border-radius: 0.5rem;

`;

const StyledButton = styled.button`
  border: none;

  margin-top: 1rem;
  min-height: 2.8125rem;
  width: 100%;
  min-width: 8rem;
  border-radius: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AcceptButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;