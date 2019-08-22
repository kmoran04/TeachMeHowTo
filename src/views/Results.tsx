import React from 'react';
import '../App.css';
import SearchResultList from '../components/SearchResultList/SearchResultList';
import { NoResults, PageWrapper } from './styles';

interface ResultsProps {
  list: string[];
  term: string;
}

const Results: React.FC<ResultsProps> = (props) => {

  if (props.list[0] === '')
    return null;

  return <PageWrapper>
    {(props.list.length === 0) ?
      <NoResults>no one knows how to {props.term} yet. be the first!</NoResults> :
      <SearchResultList term={props.term} list={props.list} />}
  </PageWrapper>;
}

export default Results;
