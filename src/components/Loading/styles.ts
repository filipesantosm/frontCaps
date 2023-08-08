import { theme as themeObject } from '@/styles/theme';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

interface LoadingIconProps {
  iconColor?: keyof (typeof themeObject)['colors'];
  iconFontSize?: string;
}

export const LoadingContainer = styled.div<LoadingIconProps>`
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme, iconColor }) =>
    iconColor ? theme.colors[iconColor] : theme.colors.primary};

  font-size: ${({ iconFontSize }) => iconFontSize || '2rem'};
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  text-align: center;

  color: inherit;

  animation: ${rotate} 1s linear infinite;

  font-size: inherit;
`;
