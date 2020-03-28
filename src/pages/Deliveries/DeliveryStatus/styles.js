import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => {
    let background = '#000000';
    switch (props.text) {
      case 'PENDENTE': {
        background = '#F0F0DF';
        break;
      }
      case 'ENTREGUE': {
        background = '#DFF0DF';
        break;
      }
      case 'RETIRADA': {
        background = '#BAD2FF';
        break;
      }
      case 'CANCELADA': {
        background = '#FAB0B0';
        break;
      }
      default:
    }
    return background;
  }};

  color: ${props => {
    let background = '#000000';
    switch (props.text) {
      case 'PENDENTE': {
        background = '#C1BC35';
        break;
      }
      case 'ENTREGUE': {
        background = '#2CA42B';
        break;
      }
      case 'RETIRADA': {
        background = '#4D85EE';
        break;
      }
      case 'CANCELADA': {
        background = '#DE3B3B';
        break;
      }
      default:
    }
    return background;
  }};

  border-radius: 12px;
  border: none;

  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  padding: 4px 8px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    let background = '#000000';
    switch (props.text) {
      case 'PENDENTE': {
        background = '#C1BC35';
        break;
      }
      case 'ENTREGUE': {
        background = '#2CA42B';
        break;
      }
      case 'RETIRADA': {
        background = '#4D85EE';
        break;
      }
      case 'CANCELADA': {
        background = '#DE3B3B';
        break;
      }
      default:
    }
    return background;
  }};
  margin-right: 6px;
`;
