import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import { ResultListWrapper, Title, Term, TitleWrapper } from './styles';

interface SearchResultListProps {
  term: string;
  list: string[];
}
const SearchResultList: React.FC<SearchResultListProps> = (props) => {

  const renderResults = () => {
    return props.list.map((result: string) => {
      return <SearchResult name={result} />;
    });
  }

  return (<React.Fragment>
    <TitleWrapper>
      <Title>coworkers who can teach you how to:</Title>
      <Term>{props.term}</Term>
    </TitleWrapper>
    <ResultListWrapper>
      {renderResults()}
    </ResultListWrapper>
  </React.Fragment>
  );
};

export default SearchResultList;
