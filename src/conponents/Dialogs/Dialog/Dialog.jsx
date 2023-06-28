import classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

export const Dialog = ({name, id}) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={`${classes.dialog}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
}
