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
        <img src={logo} alt="GymPoint" />
        <nav>
          <Link to="/students">ALUNOS</Link>
          <Link to="/students">PLANOS</Link>
          <Link to="/students">MATRÍCULAS</Link>
          <Link to="/students">PEDIDOS DE AUXÍLIO</Link>
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
