import React, { useState } from 'react';
import '../App.css';
import Results from './Results';
import Form from './Form/Form';
import logo from '../Cogo-Connect-Icon.png';
import { Logo, Reset } from './styles';
import SearchPage from './SearchPage';


const Home: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [userList, setUserList] = useState(['']);
  const [showForm, setShowForm] = useState(false);

  const handleSearch = (search: string) => {
    setSearchText(search);
  };

  const onSearchSubmission = async (users: string[]) => {
    await setUserList(['John Doe', 'Jane Doe', 'John Smith']);
    checkScroll();
  }

  const scrollTop = () => {
    document.getElementById('top') &&
      document.getElementById('top')!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSearchText('');
    setUserList(['']);
    setShowForm(false);
  }

  const checkScroll = () => {
    document.getElementById('Results') &&
      document.getElementById('Results')!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const searchShowForm = () => {
    setShowForm(true);
  }

  return (<div className="App">

    <header className="App-header" id="top">
      <SearchPage setShowForm={searchShowForm} setSearch={handleSearch} searchText={searchText} setUserList={onSearchSubmission}/>
      <Logo href='https://www.kristenemoran.com' target='_blank'><img src={logo} alt="logo" height="80px" /> </Logo>
      <Reset onClick={scrollTop} />
    </header>

    <div className="Results" id="Results">
      <Results list={userList} term={searchText} />
    </div>

    <div className="Form" id="Form">
      {showForm && <Form />}
    </div>
  </div >
  );
}

export default Home;
