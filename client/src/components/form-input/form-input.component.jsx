import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  ValidateError
} from './form-input.styles';

const FormInput = ({ handleChange, label, id, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    <ValidateError id={id}></ValidateError>

  </GroupContainer>
);

export default FormInput;
