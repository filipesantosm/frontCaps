import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  height: 100vh;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.grayf3};
`;

export const Content = styled.main`
  width: 100%;
  max-width: 30rem;
  overflow: auto;
  background: ${({ theme }) => theme.colors.white};
  padding: 1.875rem 2.75rem 2.5rem 2.75rem;
  border-radius: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .field {
    background: #fafafa;
  }
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const SubmitButton = styled.button`
  border: none;

  margin-top: 1rem;

  width: 100%;
  min-height: 3.75rem;
  border-radius: 0.625rem;

  background: ${({ theme }) => theme.colors.primary};

  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
