import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const Button = styled.button`
  background-color: #7d40e7;
  color: #fff;
  width: 142px;
  height: 36px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-evenly;
  padding-right: 5px;
`;

export const Icon = styled(MdAdd)`
  width: 24px;
  height: 24px;
  color: white;
`;
