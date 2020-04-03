import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

  width: 900px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const MdNavigateBeforeButton = styled.button`
  background-color: #ccc;
  border: none;
  width: 112px;
  height: 36px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: start;

  margin-right: 16px;

  svg {
    margin-left: 12px;
  }
`;

export const MdCheckButton = styled.button`
  background-color: #7d40e7;
  border: none;
  width: 112px;
  height: 36px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 6px;
  }
`;

export const Unform = styled.div`
  margin-top: 20px;

  width: 900px;
  height: 225px;
  background-color: #fff;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 14px;
  }
`;

export const Line1 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 405px;
    height: 45px;

    border: 1px solid #dddddd;
    border-radius: 4px;

    margin-top: 9px;
  }
`;

export const Input3 = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 16px;
  }

  input {
    width: 855px;
    height: 45px;

    border: 1px solid #dddddd;
    border-radius: 4px;

    margin-top: 9px;
  }
`;
