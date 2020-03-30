import React from 'react';

import { MdRemoveRedEye } from 'react-icons/md';

import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

import { Container } from './styles';

export default function Modal({ data }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <span>
            <MdRemoveRedEye color="#8E5BE8" size={15} />
            Visualizar
          </span>
        </button>
      }
      closeOnDocumentClick
      modal
      contentStyle={{
        width: '450px',
        height: '353px',
        borderRadius: '4px',
        padding: '25px 25px 0px 25px',
      }}
      overlayStyle={{
        background: 'rgb(0, 0, 0, 0.7)',
        border: 'rgb(0, 0, 0, 0.7)',
      }}
    >
      <Container>
        <div>
          <strong>Informações da encomenda</strong>
          <small>
            {data.recipient.street}, {data.recipient.number}
          </small>
          <small>
            {data.recipient.city} - {data.recipient.state}
          </small>
          <small>{data.recipient.postalcode}</small>
        </div>
        {data.start_date ? (
          <div>
            <strong>Datas</strong>
            <div>
              <span>Retirada: </span>
              <small>{data.start_date}</small>
            </div>
            {data.end_date ? (
              <div>
                <span>Entrega: </span>
                <small>{data.end_date}</small>
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </Popup>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    recipient_id: PropTypes.number,
    deliveryman_id: PropTypes.number,
    product: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      complement: PropTypes.string,
      state: PropTypes.string,
      city: PropTypes.string,
      postalcode: PropTypes.number,
    }),
  }).isRequired,
};
