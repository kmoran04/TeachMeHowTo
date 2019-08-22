import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { SearchInput } from './styles';

describe('<SearchBar />', () => {
  it('shallow-renders without crashing', () => {
    const wrapper = shallow(<SearchBar text='' handleSearch={()=>{}} placeholder='search'/>);
    expect(wrapper.length).toEqual(1);
  });

  it('has a working search function', () => {
    const searchMock = jest.fn();
    const wrapper = shallow(<SearchBar text='' handleSearch={searchMock} placeholder='search'/>);
    wrapper.find(SearchInput).simulate('change');
    expect(searchMock).toHaveBeenCalledTimes(1);
  });
});
