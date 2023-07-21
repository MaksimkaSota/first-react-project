import { LoginReduxForm } from './LoginForm/LoginForm';

export const Login = () => {
  const onSubmitLogin = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitLogin} />
    </div>
  );
};
