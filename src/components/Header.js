import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1><NavLink to="/">Vet Application</NavLink></h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
            <button onClick={logoutHandler}>
              LogOut
            </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
