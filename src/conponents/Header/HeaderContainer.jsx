import { Header } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reduser';

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {logout};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
