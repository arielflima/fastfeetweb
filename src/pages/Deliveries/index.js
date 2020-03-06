import React from 'react';

import { Container, InputStyled } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <strong>Gerenciando Encomendas</strong>
      <InputStyled />
      <table>
        <tr>
          <td>ID</td>
          <td>Destinatário</td>
          <td>Entregador</td>
          <td>Cidade</td>
          <td>Estado</td>
          <td>Status</td>
          <td>Ações</td>
        </tr>
        <tr>
          <td>#01</td>
          <td>Vielinha da quebrada</td>
          <td>Carlinhos Brown</td>
          <td>Campinão</td>
          <td>Sampa</td>
          <td>ENTREGUE</td>
          <td>---</td>
        </tr>
      </table>
    </Container>
  );
}
