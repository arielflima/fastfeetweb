import styled from 'styled-components';

export const PopUpButton = styled.button`
  background: none;
  border: none;
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

  button {
    border: none;
    background: none;
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
