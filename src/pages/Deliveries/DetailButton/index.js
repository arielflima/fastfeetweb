import React from 'react';
import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';
import Popup from 'reactjs-popup';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import Modal from '../Modal';
import api from '~/services/api';

import { PopUpButton, DetailContainer } from './styles';

export default function DetailButton({ loadDeliveries, data, ...rest }) {
  async function handleDelete() {
    const confirm = window.confirm(
      `Você tem certeza que deseja deletar entrega de ID:${data.id}?`
    );

    if (!confirm) {
      toast.error('Encomenda NÃO apagada!');
      return;
    }

    try {
      await api.delete(`/delivery/${data.id}`);
      loadDeliveries();
      toast.success(`Encomenda ID:${data.id} apagada com sucesso!`);
    } catch (err) {
      toast.error(`Encomenda ID:${data.id} NÃO pode ser deletada!`);
    }
  }

  return (
    <Popup
      trigger={
        <PopUpButton type="button">
          <MdMoreHoriz />
        </PopUpButton>
      }
      position="bottom center"
      contentStyle={{
        width: '150px',
        height: '120px',
        borderRadius: '4px',
      }}
      {...rest}
    >
      <DetailContainer>
        <div>
          <Modal data={data} />
          <button onClick={handleDelete} type="button">
            <span>
              <MdEdit color="#4D85EE" size={15} />
              Editar
            </span>
          </button>
          <button onClick={handleDelete} type="button">
            <span>
              <MdDeleteForever color="#DE3B3B" size={15} />
              Excluir
            </span>
          </button>
        </div>
      </DetailContainer>
    </Popup>
  );
}

DetailButton.propTypes = {
  loadDeliveries: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    recipient_id: PropTypes.number,
    deliveryman_id: PropTypes.number,
    product: PropTypes.string,
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
