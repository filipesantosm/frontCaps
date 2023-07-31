import styled from 'styled-components';

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
  max-height: max(10rem, 35vh);
  width: 100%;

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
    border: 1px solid #00214b;
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

  color: #00214b;

  strong {
    font-weight: 600;
  }
`;
