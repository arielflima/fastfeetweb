import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 448px;
  text-align: center;
  background: #f2f2f2;
  padding: 30px;

  img {
    margin-top: 15px;
  }

  form {
    text-align: start;
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    strong {
      font-size: 11px;
    }

    input {
      margin-top: 5px;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 4px;
      border: 1px solid #dddddd;
    }

    button {
      padding: 10px;
      background: #ee4d64;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
      border: 0 solid;
    }
  }
`;
