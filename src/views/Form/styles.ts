import styled from 'styled-components';
import { StyledButton } from '../../components/Button/Button';

export const FormInput = styled.input`
    border-radius: 3px;
    padding: 0px 30px;
    border: 0px;
    width: 300px;
    height: 35px;
    font-weight: bold;
    ::placeholder {
        font-weight: normal;
        font-style: italic;
    }
    :focus {
        outline: none !important;
    }
`;

export const FormInputWrapper = styled.div`
    margin-bottom: 15px;
`

export const FormTitle = styled.h1`
    padding-top: 100px;
    font-size: 40px;
`;

export const AddSkill = styled(StyledButton)`
   display: block;
   margin: auto;
   background: none;

   &:hover {
       background: none;
       color: #19647E;
   }
`;