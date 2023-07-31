import styled from 'styled-components';

export const SearchBar = styled.form`
  margin-top: 0.75rem;

  height: 3.5rem;
  padding: 0.9375rem;
  padding-right: 1.125rem;
  width: 100%;
  max-width: 32rem;
  border-radius: 0.3125rem;
  border: 2px solid #e4eef7;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: #79a9dc;
    transition: all 0.3s;
  }

  transition: all 0.3s;

  &:focus-within {
    svg {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const SearchInput = styled.input`
  width: 95%;
  background: transparent;
  border: none;
  outline: none;

  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayb9};
  }
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;

  width: 1.75rem;
  height: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
`;
