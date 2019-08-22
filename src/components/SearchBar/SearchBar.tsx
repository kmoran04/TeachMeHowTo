import React, { ChangeEvent } from 'react';

import { SearchBarStyled, SearchInput } from './styles';

interface ISearchBarProps {
  text: string;
  placeholder: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {

  return (
    <SearchBarStyled>
      <SearchInput
        type='text'
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.handleSearch}
        onKeyPress={props.onKeyPress}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
