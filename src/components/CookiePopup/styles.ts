import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 33, 75, 0.44);
  position: fixed;
  z-index: 9999;
  bottom:0


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border: none;

  padding:1.5rem;
  position: fixed;
  bottom: 2rem;
  z-index: 3;

  min-height: 4.375rem;
  width: fit-content;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.32);

  align-items: center;

  padding-left: 2.25rem;
  padding-right: 2.75rem;

  color: #000;
  font-size: 0.75rem;

  background: #fff;
  border-radius: 0.5rem;
`;