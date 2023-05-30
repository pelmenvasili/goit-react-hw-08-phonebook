import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import css from './Navigation.module.css';

  const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (<nav className={css.navigation}>
    <NavLink to="/" className={css.navLink}>
      Home
    </NavLink>
{isLoggedIn && (<NavLink
      to="/contacts" className={css.navLink}
    >
      Contacts
    </NavLink>)  }
  </nav>)
    }

export default Navigation;