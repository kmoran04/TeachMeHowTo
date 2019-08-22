import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import { StyledButton } from '../components/Button/Button';

interface ISearchPageProps {
  setShowForm: () => void,
  setSearch: (search: string) => void,
  searchText: string,
  setUserList: (users: string[]) => void,
}

const checkScrollForm = () => {
  document.getElementById('Form') &&
    document.getElementById('Form')!.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const SearchPage: React.FC<ISearchPageProps> = (props) => {

  const onClickTeach = async (e: React.MouseEvent<HTMLElement>) => {
    await props.setShowForm();
    checkScrollForm();
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    props.setSearch(search);
  };
  
  // TODO: Actually filter results
  const filterResults = () => {
    return ['Annie Barnett-Young', 'Kathryn Hackman', 'Kristen Moran'];
  }

  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (props.searchText !== '') {
        props.setUserList(filterResults());
      }
    }
  }


  return (<React.Fragment><SearchBar
    text={props.searchText}
    placeholder={'teach me how to...'}
    handleSearch={handleSearch}
    onKeyPress={onKeyPress} />
  <StyledButton onClick={onClickTeach} >I want to teach</StyledButton>
  </React.Fragment>);
}

export default SearchPage;