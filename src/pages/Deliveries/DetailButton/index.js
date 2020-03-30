import React from 'react';
import {
  MdMoreHoriz,
  MdEdit,
  MdDeleteForever,
  MdRemoveRedEye,
} from 'react-icons/md';
import Popup from 'reactjs-popup';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import api from '~/services/api';

import { PopUpButton, DetailContainer } from './styles';

export default function DetailButton({ loadDeliveries, id, ...rest }) {
  async function handleDelete() {
    const confirm = window.confirm(
      `Você tem certeza que deseja deletar entrega de ID:${id}?`
    );

    if (!confirm) {
      toast.error('Encomenda NÃO apagada!');
      return;
    }

    try {
      await api.delete(`/delivery/${id}`);
      loadDeliveries();
      toast.success(`Encomenda ID:${id} apagada com sucesso!`);
    } catch (err) {
      toast.error(`Encomenda ID:${id} NÃO pode ser deletada!`);
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
          <button onClick={handleDelete} type="button">
            <span>
              <MdRemoveRedEye color="#8E5BE8" size={15} />
              Visualizar
            </span>
          </button>
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
  id: PropTypes.number.isRequired,
};
