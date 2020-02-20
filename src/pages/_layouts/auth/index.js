import React from 'react';
import PropTypes from 'prop-types';

import { Ẁrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.PropTypes = {
  children: PropTypes.element.isRequired,
};
