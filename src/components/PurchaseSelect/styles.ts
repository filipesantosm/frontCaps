import styled from 'styled-components';

export const OptionContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size: 1.1875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDarker};
`;

export const OptionSeparator = styled.div`
  width: 0.125rem;
  height: 1.125rem;
  background: ${({ theme }) => theme.colors.grayb9};
`;

export const DropdownIndicatorContainer = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};

  width: 3rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
