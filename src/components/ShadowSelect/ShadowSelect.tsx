import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { useTheme } from 'styled-components';

const ShadowSelect = (props: ReactSelectProps) => {
  const theme = useTheme();

  return (
    <ReactSelect
      {...props}
      styles={{
        indicatorSeparator: prev => ({
          ...prev,
          display: 'none',
        }),
        singleValue: prev => ({
          ...prev,
          fontSize: '1rem',
          fontWeight: 600,
          color: theme.colors.primaryDarker,
        }),
        option: (prev, { isSelected }) => ({
          ...prev,
          fontSize: '1rem',
          fontWeight: 600,
          color: theme.colors.primaryDarker,
          background: isSelected ? '#E4EEF7' : '#fff',
        }),
        control: prev => ({
          ...prev,
          padding: '0.25rem 0.25rem',
          border: 'none',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
          borderRadius: '0.625rem',
          minWidth: '8.75rem',
          minHeight: '2.375rem',
        }),
        dropdownIndicator: prev => ({
          ...prev,
          color: theme.colors.primaryDarker,
          padding: '0.5rem',
          ':hover': {
            color: theme.colors.primaryDarker,
          },
        }),
        indicatorsContainer: prev => ({
          ...prev,
          padding: 0,
        }),
      }}
    />
  );
};

export default ShadowSelect;
