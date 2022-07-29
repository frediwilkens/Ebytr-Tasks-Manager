/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import AppContext from '../../context/AppContext';
import Button from '../Button/Button';

const error400 = 400;

const FormLogin = () => {
  const navigate = useNavigate();
  const { setError } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const passwordLength = 5;
  const regex = /\S+@\S+\.\S+[\w-]{2,4}$/;

  useEffect(() => {
    if ((regex.test(email)) && (password.length >= passwordLength)) {
      setDisabled(false);
    } else setDisabled(true);
  }, [email, password, regex]);

  function handleSubmit(event) {
    event.preventDefault();
    if ((regex.test(email)) && (password.length >= passwordLength)) {
      api.post('/user/login', {
          email, password,
        }).then(({ data }) => {
          localStorage.setItem('user', JSON.stringify({ ...data }));
          navigate('/tasks');
        }).catch(({ response: { status } }) => {
          switch (status) {
          case error400:
            setError('Email ou senha incorretos');
            break;
          default:
            setError('Erro ao conectar ao banco de dados');
          }
        });
    }

    const resetErrorTime = 10000;
    setTimeout(() => setError(''), resetErrorTime);
  }

  return (
    <div className="formLoginContainer">
      <div className="formEmail">
        <p>Login</p>
        <input
          type="email"
          id="email"
          value={ email }
          placeholder="Digite seu email"
          onChange={ (event) => setEmail(event.target.value) }
        />
      </div>
      <div className="formPassword">
        <p>Senha</p>
        <input
          type="password"
          id="password"
          value={ password }
          placeholder="Digite sua senha"
          onChange={ (event) => setPassword(event.target.value) }
        />
      </div>

      <Button
        onClick={ (event) => handleSubmit(event) }
        variant="container"
        disabled={ disabled }
      >
        LOGIN
      </Button>

      <Button
        variant="outline"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>
    </div>
  );
};

export default FormLogin;
