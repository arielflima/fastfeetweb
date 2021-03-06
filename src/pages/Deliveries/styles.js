import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  max-height: 100%;
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  align-self: center;

  strong {
    color: #444;
    font-size: 24px;
  }

  table {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
  }

  td {
    font-size: 16px;
    height: 57px;
    width: 40%;
    text-align: start;
    display: flex;
    align-items: center;
    white-space: pre-line;

    img {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin-right: 5px;
    }
  }

  thead > tr {
    height: 22px;
    display: flex;
    align-items: center;

    td {
      font-weight: bold;
      color: #444;
    }
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
    max-width: 1200px;
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
`;

export const Button = styled.button`
  background-color: #7d40e7;
  color: #fff;
  border: none;
  width: 112px;
  height: 24px;

  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RollBar = styled.div`
    margin-top: 16px;
    max-width: 100%;
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;
