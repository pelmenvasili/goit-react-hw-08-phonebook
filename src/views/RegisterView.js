import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import css from './LoginView.module.css';
import { Navigate } from 'react-router-dom';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [redirectToContacts, setRedirectToContacts] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setRedirectToContacts(true);
    setName('');
    setEmail('');
    setPassword('');
  };

  if (redirectToContacts) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <div className={css.container}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} className={css.input} />
        </label>

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

        <button type="submit" className={css.button}>Register</button>
      </form>
    </div>
  );
}