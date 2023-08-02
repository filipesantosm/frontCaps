import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  border: 0.375rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;

  position: relative;

  canvas {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1.125rem 2.25rem 1.625rem;

  background: ${({ theme }) => theme.colors.primary};

  font-size: 1.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;

export const LosingContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.error};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LosingTitle = styled.p`
  margin-top: 3rem;

  font-size: 2.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
  text-align: center;
`;

export const LosingDate = styled.p`
  margin-top: 1.5rem;

  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2f};
`;

export const ScratchingContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #e4eef7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ScratchingLogo = styled.img`
  width: 6rem;
`;

export const ScratchingTitle = styled.p`
  font-size: 3rem;
`;

export const WinnerContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #fffacb;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #4b0106;
  font-size: 1.875rem;
  font-weight: 700;
`;

export const WinnerImage = styled.img`
  width: 60%;
  max-height: 100%;

  margin-bottom: 1.5rem;
`;

export const WinnerDate = styled.div`
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 1.25rem;

  display: flex;
  justify-content: end;

  color: ${({ theme }) => theme.colors.gray2f};
  font-size: 1.125rem;
  font-weight: 500;
`;
