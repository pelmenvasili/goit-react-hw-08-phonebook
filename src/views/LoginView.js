import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import css from "./LoginView.module.css";
import { Navigate } from 'react-router-dom';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToContacts, setRedirectToContacts] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    localStorage.setItem('isLoggedIn', true);
    setRedirectToContacts(true);
  };

  if (redirectToContacts) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <div className={css.container}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <button type="submit" className={css.button}>Sign in</button>
      </form>
    </div>
  );
}