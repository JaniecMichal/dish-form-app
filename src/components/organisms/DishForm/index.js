import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { FormWrapper } from './styled';
import InputField from 'components/molecules/InputField';
import { MainTitle } from 'components/atoms/MainTitle';
import { Title } from 'components/atoms/Title';
import { StyledButton } from 'components/atoms/Button';

let DishForm = ({ dishTypeValue }) => {
  return (
    <FormWrapper>
      <MainTitle>Dish form</MainTitle>
      <InputField
        label="Dish name"
        name="dishName"
        component="input"
        type="text"
        placeholder="Write your dish name"
      />
      <InputField
        label="Preparation time"
        name="preparationTime"
        component="input"
        type="time"
        step="1"
      />
      <InputField
        label="Dish type"
        name="dishType"
        component="select"
        options={['pizza', 'soup', 'sandwhich']}
      />
      <div>
        {dishTypeValue ? <Title>Details</Title> : ''}
        {dishTypeValue === 'pizza' ? (
          <div>
            <InputField
              label="Number of slices"
              name="noOfSlices"
              component="input"
              type="number"
            />
            <InputField
              label="Diameter"
              name="diameter"
              component="input"
              type="number"
              step="0.1"
            />
          </div>
        ) : (
          ''
        )}
        {dishTypeValue === 'soup' ? (
          <InputField
            label="Spiciness scale"
            name="spiciness"
            component="input"
            type="number"
            step="1"
            min="1"
            max="10"
          />
        ) : (
          ''
        )}
        {dishTypeValue === 'sandwhich' ? (
          <InputField
            label="Slices of bread"
            name="breadSlices"
            component="input"
            type="number"
            step="1"
          />
        ) : (
          ''
        )}
      </div>
      <StyledButton>Submit your dish</StyledButton>
    </FormWrapper>
  );
};

DishForm = reduxForm({
  form: 'DishForm',
})(DishForm);

const selector = formValueSelector('DishForm');
DishForm = connect((state) => {
  const dishTypeValue = selector(state, 'dishType');
  return {
    dishTypeValue,
  };
})(DishForm);

export default DishForm;
