import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 33, 75, 0.44);

  position: fixed;
  z-index: 999;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  min-width: 22.5rem;
  min-height: min(70vh, 35rem);

  width: 100%;
  max-width: 22.5rem;
  padding: 2.125rem 2rem 1.625rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  .password-field {
    margin-top: 2rem;
    background: #fafafa;
    padding: 0.375rem 1.25rem 0.4375rem;

    textarea {
      min-height: 7.5rem;
    }

    label {
      font-size: 0.6875rem;
      margin-bottom: 0.125rem;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: 7rem;
  height: 8rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const Attention = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
`;

export const PromptQuestion = styled.h2`
  margin-top: 2rem;

  text-align: center;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const PromptMessage = styled.p`
  margin-top: 1.5rem;

  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const Separator = styled.div`
  margin-top: 2rem;

  width: 100%;
  height: 1px;
  background: #e7e7e7;
`;

export const ContinueButton = styled.button`
  border: none;

  min-height: 2.875rem;
  width: 100%;
  max-width: 10.625rem;
  margin: auto;
  margin-top: 1.5rem;
  border-radius: 0.625rem;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const PasswordTitle = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDarker};
`;

export const DeleteAccountButton = styled.button`
  margin-top: 1.875rem;

  background: ${({ theme }) => theme.colors.white};

  min-height: 3.75rem;
  width: 100%;
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.375rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
`;
