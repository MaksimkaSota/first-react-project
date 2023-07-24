import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../../common/FormsControls/FormsControls';
import { requiredField } from '../../../utils/validators/validators';
import classes from './LoginForm.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Email'}
               component={FormControl}
               name={'email'}
               validate={[requiredField]}
               child={'input'}
        />
      </div>
      <div>
        <Field placeholder={'Password'}
               component={FormControl}
               name={'password'}
               validate={[requiredField]}
               child={'input'}
               type={'password'}
               autoComplete="on"
        />
      </div>
      <div>
        <Field component={FormControl} name={'rememberMe'} type={'checkbox'} child={'input'} /> remember me
      </div>
      {error && <div className={classes.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
