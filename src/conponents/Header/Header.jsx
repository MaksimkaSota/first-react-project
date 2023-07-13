import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = ({login, isAuth}) => {
  return (
    <header className={classes.header}>
      <img src='https://static.vecteezy.com/system/resources/previews/010/994/232/original/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg'  alt='logo' />
      <div className={classes.loginBlock}>
        {isAuth? login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
