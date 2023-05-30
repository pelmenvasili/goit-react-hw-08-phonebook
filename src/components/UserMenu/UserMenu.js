import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.container}>
      <p className={css.welcomeMessage}>Welcome, {name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(operations.logOut())}>
       Logout
      </button>
    </div>
  );
}