import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: #fff;
  border: #ddd 1px solid;
  box-sizing: border-box;
  padding: 18px;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border-right: 1px solid #ddd;
    padding-right: 20px;
  }

  nav {
    align-items: center;
    display: flex;
    white-space: nowrap;

    a {
      color: #999;
      font-size: 18px;
      font-weight: bold;
      margin: 0 20px;
    }
  }

  aside {
    text-align: center;
    display: flex;
    white-space: nowrap;
    position: absolute;
    right: 40px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ddd;

  div {
    text-align: right;

    strong {
      display: block;
      color: #666;
      font-weight: bold;
      font-size: 16px;
    }

    a {
      display: block;
      font-size: 14px;
      color: red;
      font-weight: normal;
    }
  }
`;
