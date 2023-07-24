import { connect } from 'react-redux';
import { Login } from './Login';
import { login } from '../../redux/auth-reduser';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
const mapDispatchToProps = {login}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
