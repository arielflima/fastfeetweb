import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  padding-top: 34px;
  padding-left: 120px;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  strong {
    color: #444;
    font-size: 24px;
  }

  table {
    width: 1200px;
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
  }

  td {
    font-size: 16px;
    height: 57px;
    width: 40%;
    text-align: start;
    display: flex;
    align-items: center;
    white-space: pre-line;
  }

  thead > tr > td {
    font-weight: bold;
    color: #444;
  }

  tr {
    display: flex;
    border-radius: 4px;
  }

  tbody > tr {
    margin-top: 21px;
    background-color: #fff;
    border: 1px solid #fff;

    td {
      color: #666;
    }
  }

  p {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    align-items: baseline;
  }

  .startLine {
    margin-left: 25px;
    width: 10%;
  }

  .endLine {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 25px;
    width: 10%;
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

export const Button = styled.button`
  background-color: #fff;
  color: #c6c6c6;
  font-weight: bold;
  border: none;
  font-size: 24px;
`;
