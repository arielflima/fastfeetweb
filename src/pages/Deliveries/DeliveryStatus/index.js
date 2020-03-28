import React from 'react';
import PropTypes from 'prop-types';

import { Container, Circle } from './styles';

export default function DeliveryStatus({ text }) {
  return (
    <Container text={text}>
      <Circle text={text} />
      {text}
    </Container>
  );
}

DeliveryStatus.propTypes = {
  text: PropTypes.string.isRequired,
};
