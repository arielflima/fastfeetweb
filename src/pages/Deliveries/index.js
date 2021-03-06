import React, { useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import api from '~/services/api';

// import history from '~/services/history';

import { Container, Button, RollBar } from './styles';
import RegisterButton from '~/components/RegisterButton';
import InputStyled from '~/components/InputHeader';

import Status from './DeliveryStatus';
import DetailButton from './DetailButton';

// import DeliveryModal from './Modal';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

  async function loadDeliveries() {
    const response = await api.get('/delivery', {
      params: {
        page,
      },
    });
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, [page]); //eslint-disable-line

  return (
    <Container>
      <strong>Gerenciando Encomendas</strong>
      <p>
        <InputStyled
          name="searchInput"
          type="search"
          placeholder="Busque por encomendas"
        />
        <RegisterButton />
      </p>

      <table>
        <thead>
          <tr>
            <td className="startLine">ID</td>
            <td>Destinatário</td>
            <td>Entregador</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Status</td>
            <td className="endLine">Ações</td>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td className="startLine">{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <img
                  alt={delivery.deliveryman.name}
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                />
                {delivery.deliveryman.name}
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Status text={delivery.status} />
              </td>
              <td className="endLine">
                <DetailButton loadDeliveries={loadDeliveries} data={delivery} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RollBar>
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          type="button"
        >
          <MdNavigateBefore size={18} /> ANTERIOR
        </Button>
        <Button
          disabled={deliveries.length < 6}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          PROXIMO
          <MdNavigateNext size={18} />
        </Button>
      </RollBar>
    </Container>
  );
}
