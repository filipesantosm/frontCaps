import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  overflow: auto;

  background: ${({ theme }) => theme.colors.grayf3};
`;
