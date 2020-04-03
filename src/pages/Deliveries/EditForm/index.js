import React from 'react';

import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import {
  Container,
  Header,
  Unform,
  MdNavigateBeforeButton,
  MdCheckButton,
  Buttons,
  Input,
  Input3,
  Line1,
} from './styles';

export default function EditForm() {
  return (
    <Container>
      <Header>
        <strong>Edição de encomendas</strong>
        <Buttons>
          <MdNavigateBeforeButton>
            <MdNavigateBefore size={22} color="#FFF" />
            VOLTAR
          </MdNavigateBeforeButton>
          <MdCheckButton>
            <MdCheck size={20} color="#FFF" />
            SALVAR
          </MdCheckButton>
        </Buttons>
      </Header>

      <Unform>
        <Line1>
          <Input>
            <strong>Destinatario</strong>
            <input type="text" />
          </Input>
          <Input>
            <strong>Entregador</strong>
            <input type="text" />
          </Input>
        </Line1>
        <Input3>
          <strong>Nome do Produto</strong>
          <input type="text" />
        </Input3>
      </Unform>
    </Container>
  );
}
