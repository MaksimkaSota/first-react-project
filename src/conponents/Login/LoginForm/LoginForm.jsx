import { ErrorMessage, Form } from 'formik';
import classes from './LoginForm.module.css';
import { FormField } from '../../common/FormField/FormField';

export const LoginForm = ({isSubmitting, status, handleChange}) => {
  return (
    <Form>
      <FormField
        name={'email'}
        type={'email'}
        placeholder={'Email'}
        callback={handleChange}
      />
      <ErrorMessage name="email" component="div" className={classes.error} />
      <FormField
        name={'password'}
        type={'password'}
        placeholder={'Password'}
        props={{autoComplete: 'on'}}
        callback={handleChange}
      />
      <ErrorMessage name="password" component="div" className={classes.error} />
      <FormField
        name={'rememberMe'}
        type={'checkbox'}
        text={'remember me'}
        props={{id: 'rememberMe'}}
        callback={handleChange}
      />
      {
        status &&
        <div className={classes.formSummaryError}>
          {status}
        </div>
      }
      <button type={'submit'} disabled={isSubmitting}>Login</button>
    </Form>
  );
};
