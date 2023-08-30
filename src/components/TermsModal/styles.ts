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

  overflow: auto;
`;

export const Content = styled.main`
  position: relative;

  width: 95%;
  max-width: 57.5rem;
  min-height: min(39.6875rem, 90vh);

  border-radius: 2.125rem;

  background: ${({ theme }) => theme.colors.grayf3};
  border: 1px solid ${({ theme }) => theme.colors.gray74};

  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  padding: 1.875rem;

  border-bottom: 1px solid #e7e7e7;
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

export const TermsContainer = styled.div`
  margin-top: 1.875rem;

  width: 100%;
  flex: 1;

  padding-left: 4.625rem;
  padding-right: 1rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
`;

export const TermsText = styled.div`
  min-height: 25vh;

  max-height: max(10rem, 35vh);
  width: 100%;

  white-space: pre-line;

  padding-right: 3rem;

  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: justify;

  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 #f3f3f3;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
    background: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 6px;
    background: #d6d6d6;
  }
`;

export const CheckboxContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  content: none;

  cursor: pointer;

  &:before {
    content: '\f00c';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    font-family: 'FontAwesome';
    color: transparent !important;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primaryDarker};
    border-radius: 0.25rem;
  }
  &:checked:before {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: #32b85b;
    border: 1px solid #32b85b;
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.9375rem;

  font-size: 1rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.primaryDarker};

  strong {
    font-weight: 600;
  }
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
