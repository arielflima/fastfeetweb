import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
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
  width: 26px;
  height: 26px;
  border: none;
  font-size: 26px;
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    justify-content: start;

    span:nth-last-child(2) {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
  }

  span {
    padding: 0px;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;

    svg {
      margin-right: 7px;
      margin-left: 7px;
    }
  }
`;

export const RollBar = styled.div`
    margin-top: 16px;
    max-width: 100%;
    width: 1200px;
    display: flex;
    justify-content: space-between;
  }
`;
