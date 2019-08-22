import styled from 'styled-components';

const SearchBarStyled = styled.div.attrs({
  className: 'SearchBar',
})`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: -2rem;
`;


const SearchInput = styled.input.attrs({
  className: 'SearchInput',
})`
  background-color: white;
  border-radius: 2.5rem;
  border: none;
  padding: 0.25rem 2.25rem;
  font-size: 2rem;
  color: dark-grey;
  height: 4rem;
  width: 40rem;
  box-shadow: 10px 10px rgb(40,43,40, .25);
  margin-bottom: 100px;

  ::placeholder {
    color: grey;
  }
  &:focus {
    outline: none !important;
  }
`;

export {
  SearchBarStyled, SearchInput,
};
