import { Field, reduxForm } from 'redux-form';

const LoginForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Login'} component={'input'} name={'login'} />
      </div>
      <div>
        <Field placeholder={'Password'} component={'input'} name={'password'} />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
