import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { FormWrapper } from './styled';
import InputField from 'components/molecules/InputField';
import { MainTitle } from 'components/atoms/MainTitle';
import { Title } from 'components/atoms/Title';
import { StyledButton } from 'components/atoms/Button';
import { sendDish } from './sendDish';

const convertToNumber = (value) => value && Number(value);
const addSeconds = (value) => {
  if (value.length === 5) {
    const newValue = `${value}:00`;
    return newValue;
  }
  return value;
};

let DishForm = ({
  name,
  preparation_time,
  type,
  no_of_slices,
  diameter,
  spiciness_scale,
  slices_of_bread,
}) => {
  const dishToSubmit = (basicData, type) => {
    if (type === 'pizza') {
      return {
        ...basicData,
        no_of_slices,
        diameter,
      };
    }

    if (type === 'soup') {
      return {
        ...basicData,
        spiciness_scale,
      };
    }

    if (type === 'sandwich') {
      return {
        ...basicData,
        slices_of_bread,
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      alert('Please fill dish name field');
      return;
    }
    const basicData = { name, preparation_time, type };

    sendDish(dishToSubmit(basicData, type));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <MainTitle>Add your dish</MainTitle>
      <InputField
        label="Dish name"
        name="name"
        component="input"
        type="text"
        placeholder="Write your dish name"
      />
      <InputField
        label="Preparation time"
        name="preparation_time"
        component="input"
        type="time"
        step="1"
        normalize={addSeconds}
      />
      <InputField
        label="Dish type"
        name="type"
        component="select"
        options={['pizza', 'soup', 'sandwich']}
      />
      <div>
        {type ? <Title>Details</Title> : ''}
        {type === 'pizza' ? (
          <div>
            <InputField
              label="Number of slices"
              name="no_of_slices"
              component="input"
              type="number"
              placeholder="Choose number of slices"
              normalize={convertToNumber}
            />
            <InputField
              label="Diameter"
              name="diameter"
              component="input"
              type="number"
              min="12"
              step="0.1"
              placeholder="Choose size"
              normalize={convertToNumber}
            />
          </div>
        ) : (
          ''
        )}
        {type === 'soup' ? (
          <InputField
            label="Spiciness scale"
            name="spiciness_scale"
            component="input"
            type="number"
            step="1"
            min="1"
            max="10"
            placeholder="Choose in scale 1-10"
            normalize={convertToNumber}
          />
        ) : (
          ''
        )}
        {type === 'sandwich' ? (
          <InputField
            label="slices_of_bread"
            name="breadSlices"
            component="input"
            type="number"
            step="1"
            placeholder="Choose number of slices"
            normalize={convertToNumber}
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
  initialValues: {
    preparation_time: '00:01:00',
    no_of_slices: 2,
    diameter: 12.5,
    spiciness_scale: 1,
    slices_of_bread: 1,
  },
})(DishForm);

const selector = formValueSelector('DishForm');
DishForm = connect((state) => {
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = selector(
    state,
    'name',
    'preparation_time',
    'type',
    'no_of_slices',
    'diameter',
    'spiciness_scale',
    'slices_of_bread'
  );
  return {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  };
})(DishForm);

export default DishForm;
