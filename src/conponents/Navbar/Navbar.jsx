import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar = () => {
  const setActive = ({isActive}) => (isActive ? classes.active : '');

  return (
    <nav className={classes.nav}>
      <div className={classNames(classes.item, classes.active)}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={setActive}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/musics" className={setActive}>Musics</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
    </nav>
  );
};
