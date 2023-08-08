import { theme } from '@/styles/theme';
import { LoadingContainer, LoadingIcon } from './styles';

interface Props {
  iconColor?: keyof typeof theme.colors;
  iconFontSize?: string;
  containerStyles?: React.CSSProperties;
}

const Loading = ({ iconColor, iconFontSize, containerStyles }: Props) => {
  return (
    <LoadingContainer
      iconColor={iconColor}
      iconFontSize={iconFontSize}
      style={containerStyles}
    >
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;
