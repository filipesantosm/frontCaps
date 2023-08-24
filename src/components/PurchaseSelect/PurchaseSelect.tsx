/* eslint-disable react/destructuring-assignment */
import ReactSelect, {
  components,
  OptionProps,
  SingleValueProps,
  DropdownIndicatorProps,
  Props as ReactSelectProps,
} from 'react-select';
import { formatCurrency } from '@/utils/formatCurrency';
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import {
  DropdownIndicatorContainer,
  OptionContainer,
  OptionSeparator,
} from './styles';

const { Option, SingleValue, DropdownIndicator } = components;

interface IOption {
  value: string | number;
  label: string;
  price: number;
}

interface SelectProps extends ReactSelectProps<IOption, false> {
  placeholder?: string;
  options: IOption[];
  value?: IOption;
  onChange: (option: IOption | null) => void;
}

const PurchaseSelect = ({
  placeholder,
  options,
  value,
  onChange,
  ...rest
}: SelectProps) => {
  const theme = useTheme();

  return (
    <ReactSelect
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue,
        DropdownIndicator: CustomDropdownIndicator,
      }}
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      noOptionsMessage={() => 'Nenhuma opção disponível'}
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
        option: prev => ({
          ...prev,
          fontSize: '1rem',
          fontWeight: 600,
          color: theme.colors.primaryDarker,
          background: 'transparent',
        }),
        control: prev => ({
          ...prev,
          paddingRight: '0rem',
          height: '3.8125rem',
          boxShadow: 'none',
          border: 'none',
          zIndex: 2,
          borderRadius: '0.625rem',
          minWidth: '8.75rem',
        }),
        indicatorsContainer: prev => ({
          ...prev,
          padding: 0,
          margin: 0,
        }),
        dropdownIndicator: prev => ({
          ...prev,
          padding: 0,
          margin: 0,
        }),
        menu: prev => ({
          ...prev,
          borderRadius: '0.625rem',
          paddingTop: '4rem',
          border: 'none',
          zIndex: 1,
          top: '-0.5rem',
          boxShadow: 'none',
        }),
      }}
      {...rest}
    />
  );
};

const CustomSingleValue = (props: SingleValueProps<IOption>) => {
  return (
    <SingleValue {...props}>
      <OptionContainer>
        {props.data.label}
        <OptionSeparator />
        {formatCurrency(props.data.price)}
      </OptionContainer>
    </SingleValue>
  );
};

const CustomOption = (props: OptionProps<IOption>) => {
  return (
    <Option {...props}>
      <OptionContainer style={{ width: 'calc(100% - 3rem)' }}>
        {props.data.label}
        <OptionSeparator />
        {formatCurrency(props.data.price)}
      </OptionContainer>
    </Option>
  );
};

const CustomDropdownIndicator = (props: DropdownIndicatorProps<IOption>) => {
  return (
    <DropdownIndicator {...props}>
      <DropdownIndicatorContainer>
        <FaChevronDown />
      </DropdownIndicatorContainer>
    </DropdownIndicator>
  );
};

export default PurchaseSelect;
