import React from 'react';
import { Name, ResultWrapper, Slack } from './styles';
import slack from '../../icon_slack_hash_colored.png';


 interface ISearchResultProps {
  name: string;
}

const SearchResult: React.FC<ISearchResultProps> = (props) => {

  //TODO: link to slack
  //https://api.slack.com/methods/users.identity
  //create slack DM
  const createLink = () => {
    //slack://user?team={TEAM_ID}&id={USER_ID}
  };

  const onClick = () => {
    const string = 'Opening Slack to message ' + props.name;
    alert(string);
  }

  
  return (<ResultWrapper onClick={onClick}>
    <Name>{props.name}</Name>
    <Slack> <img src={slack} alt="slack" height="30px" /> </Slack>
    </ResultWrapper>
  );
};

export default SearchResult;
