import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_header.png';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.name);

  function handleSignOut() {
    dispatch(signOut());
  }

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
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
