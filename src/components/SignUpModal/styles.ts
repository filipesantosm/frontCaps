import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 33, 75, 0.44);

  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: auto;
`;

interface ContentProps {
  isTermsStep?: boolean;
}

export const Content = styled.main<ContentProps>`
  position: relative;

  width: 95%;
  max-width: 35.625rem;
  min-height: min(39.6875rem, 90vh);

  border-radius: 2.125rem;

  background: ${({ theme }) => theme.colors.grayf3};
  border: 1px solid ${({ theme }) => theme.colors.gray74};

  display: flex;
  flex-direction: column;

  ${({ isTermsStep }) =>
    isTermsStep &&
    css`
      max-width: 57.5rem;
    `}
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;

  position: absolute;
  top: 1.9375rem;
  right: 1.875rem;

  width: 2.125rem;
  height: 2.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 2.25rem;
`;

export const BackButton = styled(CloseButton)`
  right: 0;
  left: 1.875rem;
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  padding: 1.875rem;

  border-bottom: 1px solid #e7e7e7;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 27.125rem;
  margin: 0 auto;
  flex: 1;

  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  height: fit-content;
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 #f3f3f3;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 6px;
    background: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 6px;
    background: #d6d6d6;
  }
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;

  text-align: left;

  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryDarker};
  text-decoration: underline;
`;

export const SubmitButton = styled.button`
  border: none;

  margin-top: auto;

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
