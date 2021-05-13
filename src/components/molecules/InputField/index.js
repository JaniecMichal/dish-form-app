import React from 'react';
import { InputWrapper, StyledLabel, StyledField } from './styled';

const InputField = ({
  label,
  name,
  component,
  type,
  placeholder,
  options,
  step,
  min,
  max,
}) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{label}:</StyledLabel>
      {component === 'select' ? (
        <StyledField name={name} component="select" id={name} required>
          <option />
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StyledField>
      ) : (
        <StyledField
          id={name}
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
          step={step}
          min={min}
          max={max}
          required
        />
      )}
    </InputWrapper>
  );
};

export default InputField;
