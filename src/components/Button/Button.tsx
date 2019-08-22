import styled from "styled-components";

export const StyledButton = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1rem;
  background: #B9D9E4; 
  color: white;
  border-width: 0px;
  margin-top: 20px;
  margin-bottom: 100px;
  text-transform: lowercase;

  &:hover {
    background: #19647E;
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none !important;
  }
`;