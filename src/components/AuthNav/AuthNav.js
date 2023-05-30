import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css'

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink
        to="/register" className={css.navLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login" className={css.navLink}
      >
        Log in
      </NavLink>
    </div>
  );
}