import ReactSelect, { Props as ReactSelectProps } from 'react-select';

const OutlinedSelect = (props: ReactSelectProps) => {
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
          color: '#00214b',
        }),
        option: (prev, { isSelected }) => ({
          ...prev,
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#00214b',
          background: isSelected ? '#E4EEF7' : '#fff',
        }),
        control: prev => ({
          ...prev,
          padding: '0.25rem 0.25rem',
          borderRadius: '0.625rem',
          minWidth: '13rem',
          minHeight: '2.375rem',
          border: '1px solid #003a83',
          zIndex: 2,
          boxShadow: 'none',
          ':focus': {
            borderColor: '#003a83',
          },
          ':hover': {
            borderColor: '#003a83',
          },
        }),
        dropdownIndicator: prev => ({
          ...prev,
          color: '#0054BC',
          padding: '0.5rem',
          ':hover': {
            color: '#0054BC',
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
