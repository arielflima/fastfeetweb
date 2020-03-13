import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './styles';

export default function InputHeader({ name, type, placeholder }) {
  return <InputStyled name={name} type={type} placeholder={placeholder} />;
}

InputHeader.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
