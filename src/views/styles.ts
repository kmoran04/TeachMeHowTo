import styled from 'styled-components';
import { Redo } from 'styled-icons/evil/Redo';


export const Logo = styled.a`
  position: fixed;
  right: 50px;
  bottom: 15px;
  opacity: .8;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const NoResults = styled.div`
  color: white;
  font-size: 40px;
  padding-top: 20%;
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
`;

export const Reset = styled(Redo)`
  height: 50px;
  color: white;
  position: fixed;
  left: 50px;
  bottom: 30px;

  :hover {
    cursor: pointer;
    color: #19647E;
  }
`