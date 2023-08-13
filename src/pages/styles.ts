import styled from 'styled-components';

export const HeroImage = styled.img`
  position: relative;
  z-index: 1;

  width: 100%;
  object-fit: cover;
  object-position: top;
  min-height: 25.9375rem;
  aspect-ratio: 3;
`;

export const HomeContent = styled.div`
  width: 90%;
  max-width: 68.75rem;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding-bottom: 5rem;
`;

export const RaffleInformation = styled.section``;

export const RaffleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const RaffleTitle = styled.p`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RaffleDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray74};
`;

export const RaffleImageWrapperLink = styled.a`
  width: 100%;

  position: relative;

  display: block;
`;

export const RaffleImage = styled.img`
  margin-top: 1.25rem;

  width: 100%;
  height: 10.625rem;
  object-fit: cover;
  object-position: top;
  border-radius: 1.25rem;
`;

export const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 2rem;
  background: #fff;

  svg {
    min-width: 4rem;
    min-height: 4rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FloatingContactButton = styled.button`
  border: none;

  position: fixed;
  bottom: 2rem;
  right: 10%;
  z-index: 3;

  min-height: 4.375rem;
  width: fit-content;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.32);

  display: flex;
  align-items: center;
  gap: 1rem;

  padding-left: 2.25rem;
  padding-right: 2.75rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;

  background: ${({ theme }) => theme.colors.green};
  border-radius: 3rem;

  svg {
    font-size: 2.5rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
