import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_header.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira seu e-mail')
    .required('O e-mail é obrigatorio!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <strong>SUA SENHA</strong>
        <Input name="password" type="password" placeholder="***********" />

        <button type="submit">
          {loading ? 'Carregando' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
