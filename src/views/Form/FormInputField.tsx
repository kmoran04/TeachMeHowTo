import React from 'react';
import { FormInput, FormInputWrapper } from './styles';

interface IFormInputFieldProps {
  placeholderText: string,
  value: string,
}

export const FormInputField: React.FC<IFormInputFieldProps> = (props) => {

 return <FormInputWrapper> <FormInput
    type="Skill"
    name="Skill"
    value={props.value}
    placeholder={props.placeholderText}
  />
  </FormInputWrapper>
};

export default FormInputField;