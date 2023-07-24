import { LoginReduxForm } from './LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

export const Login = ({login, isAuth}) => {
  const onSubmitLogin = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  }

  if (isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitLogin} />
    </div>
  );
};
