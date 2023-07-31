import ReactSelect, { Props as ReactSelectProps } from 'react-select';

const ShadowSelect = (props: ReactSelectProps) => {
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
          color: '#00214b',
        }),
        option: (prev, { isSelected }) => ({
          ...prev,
          fontSize: '1rem',
          fontWeight: 600,
          color: '#00214b',
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
          color: '#00214b',
          padding: '0.5rem',
          ':hover': {
            color: '#00214b',
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
