import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_header.png';

export default function Header() {
  const name = useSelector(state => state.auth.name);

  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet" />
        <nav>
          <Link to="/students">ENCOMENDAS</Link>
          <Link to="/students">ENTREGADORES</Link>
          <Link to="/students">DESTINATÁRIOS</Link>
          <Link to="/students">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
