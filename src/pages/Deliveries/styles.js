import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  align-self: center;

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
    align-items: center;
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

  span {
    margin-top: 16px;
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background-color: #7d40e7;
  color: #fff;
  border: none;
  width: 26px;
  height: 26px;
  border: none;
  font-size: 26px;
`;
