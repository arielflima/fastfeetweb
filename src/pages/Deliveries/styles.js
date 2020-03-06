import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  padding-top: 34px;
  padding-left: 120px;
  max-width: 600px;

  strong {
    color: #444;
    font-size: 24px;
  }

  table {
  }
`;

export const InputStyled = styled(Input).attrs({
  name: 'search',
  type: 'text',
  placeholder: `Busque por encomendas`,
})`
  height: 36px;
  width: 237px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 22px;
`;
