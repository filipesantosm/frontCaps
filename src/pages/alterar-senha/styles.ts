import styled from 'styled-components';

export const PageContent = styled.div`
  width: 90%;
  min-height: 75vh;
  max-width: 68.75rem;
  margin: 1.875rem auto 2.5rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;

  padding: 1.875rem 2rem 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 1.875rem;
  flex: 1;

  width: 100%;
  max-width: 22.5rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.5rem;

  .change-password-field {
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

  margin-top: auto;

  background: ${({ theme }) => theme.colors.primaryTwo};
  border-radius: 0.625rem;
  min-height: 4.25rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5625rem;
  font-weight: 600;
`;
