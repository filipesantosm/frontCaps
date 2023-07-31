import { ComponentPropsWithoutRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBar, SearchButton, SearchInput } from './styles';

interface Props extends ComponentPropsWithoutRef<'input'> {}

const HelpSearchBar = (props: Props) => {
  return (
    <SearchBar onSubmit={e => e.preventDefault()}>
      <SearchInput {...props} />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </SearchBar>
  );
};

export default HelpSearchBar;
