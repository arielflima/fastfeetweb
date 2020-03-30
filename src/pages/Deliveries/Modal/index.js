import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Modal({ data }) {
  return (
    <Modal>
      <Container>
        <div>
          <strong>Informações da encomenda</strong>
          <small>
            {data.recipient.street}, {data.recipient.number}
          </small>
          <small>{data.recipient.postalcode}</small>
        </div>
        <div>DATA START TESTE</div>
      </Container>
    </Modal>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      postalcode: PropTypes.number,
    }),
  }).isRequired,
};
