import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 33, 75, 0.44);

  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  position: relative;

  width: 95%;
  max-width: 18.75rem;

  padding: 1.125rem 1.375rem;

  border-radius: 1.25rem;

  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: 1.25rem;

  color: ${({ theme }) => theme.colors.error};
  font-size: 1.375rem;
  font-weight: 600;
`;

export const Message = styled.p`
  margin-top: 1.25rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #e7e7e7;

  margin: 1.25rem 0;
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const ContinueButton = styled.button`
  border: none;

  border-radius: 0.625rem;
  min-height: 2.875rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

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

export const OutlinedButton = styled(ContinueButton)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;
