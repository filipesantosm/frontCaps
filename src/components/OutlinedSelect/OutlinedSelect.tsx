import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { useTheme } from 'styled-components';

const OutlinedSelect = (props: ReactSelectProps) => {
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
          fontSize: '0.875rem',
          fontWeight: 600,
          color: theme.colors.primaryDarker,
        }),
        option: (prev, { isSelected }) => ({
          ...prev,
          fontSize: '0.875rem',
          fontWeight: 600,
          color: theme.colors.primaryDarker,
          background: isSelected ? '#E4EEF7' : '#fff',
        }),
        control: prev => ({
          ...prev,
          padding: '0.25rem 0.25rem',
          borderRadius: '0.625rem',
          minWidth: '13rem',
          minHeight: '2.375rem',
          border: `1px solid ${theme.colors.primaryDark}`,
          zIndex: 2,
          boxShadow: 'none',
          ':focus': {
            borderColor: theme.colors.primaryDark,
          },
          ':hover': {
            borderColor: theme.colors.primaryDark,
          },
        }),
        dropdownIndicator: prev => ({
          ...prev,
          color: theme.colors.primary,
          padding: '0.5rem',
          ':hover': {
            color: theme.colors.primary,
          },
        }),
        menu: prev => ({
          ...prev,
          borderRadius: '0.625rem',
          zIndex: 1,
          top: '-0.5rem',
          paddingTop: '3rem',
          border: 'none',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        }),
      }}
    />
  );
};

export default OutlinedSelect;
