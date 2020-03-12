import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { Container, InputStyled, Button } from './styles';
import RegisterButton from '~/components/RegisterButton';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/delivery');

      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  return (
    <Container>
      <strong>Gerenciando Encomendas</strong>
      <p>
        <InputStyled /> <RegisterButton />
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
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
              <td>{delivery.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
