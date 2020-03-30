import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { PopUpButton } from './styles';

export default function DetailButton({ children, ...rest }) {
  return (
    <Popup
      trigger={
        <PopUpButton type="button">
          <MdMoreHoriz />
        </PopUpButton>
      }
      position="buttom center"
      contentStyle={{
        width: '150px',
        height: '120px',
        borderRadius: '4px',
      }}
      {...rest}
    >
      {children}
    </Popup>
  );
}

DetailButton.propTypes = {
  children: PropTypes.element.isRequired,
};
