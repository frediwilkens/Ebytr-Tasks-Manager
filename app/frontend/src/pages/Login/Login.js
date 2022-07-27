import React, { useContext } from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './styles.css';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header/Header';

const Login = () => {
  const { error } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="loginContainer">
        <FormLogin />
        {error && (
          <div
            className="login__invalid_email"
          >
            { error }
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
