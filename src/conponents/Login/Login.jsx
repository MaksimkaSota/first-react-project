import { LoginFormContainer } from './LoginForm/LoginFormContainer';
import { Navigate } from 'react-router-dom';

export const Login = ({login, isAuth, captchaUrl}) => {
  if (isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginFormContainer login={login} captchaUrl={captchaUrl} />
    </div>
  );
};
