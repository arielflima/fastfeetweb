import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 425px;
  max-height: 100%;
  text-align: center;
  background: #fff;
  padding-top: 70px;

  img {
    width: 260px;
    height: 45px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 44px 30px;

    input {
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 10px 0 10px;
      border: 1px solid #dddddd;
      color: #000;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
