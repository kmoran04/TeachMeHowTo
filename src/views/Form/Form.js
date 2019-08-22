import React from 'react';
import { Formik } from 'formik';
import { StyledButton } from '../../components/Button/Button';
import { FormTitle, AddSkill } from './styles';
import { PageWrapper } from '../styles';
import { FormInputField } from './FormInputField';

const placeholderTextArray = ['play guitar?', 'create a mobile app?', 'play poker?', 'tie knots?', 'fold origami?', 'bake?'];
let skillsArray = ['', '', '', '', ''];


const createInputs = () => {
  return skillsArray.map((skill, index) => {
    const placeholderText = placeholderTextArray[index];
    const value = skill;
    return <FormInputField placeholderText={placeholderText} value={value} />;
  });
};

const addSkill = () => {
  skillsArray.push('');
}
const onClickSubmit = () => {
    alert('Thanks for submitting!');
}

const SubmissionForm = () => (
  <PageWrapper>
    <FormTitle>i want to teach how to...</FormTitle>
    <Formik
      initialValues={{ skill: '' }}

      //TODO: create onSubmit function
      onSubmit={() => {
        
      }}

      
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
          <form onSubmit={handleSubmit} >
            {createInputs()}
            <AddSkill onClick={addSkill}>+ Add Skill</AddSkill>
            <StyledButton type="submit" onClick={onClickSubmit}> Submit </StyledButton>
          </form>
        )}
    </Formik>
  </PageWrapper>);

export default SubmissionForm;
