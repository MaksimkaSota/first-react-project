import { ErrorMessage, Field, Form } from 'formik';
import classes from './LoginForm.module.css';

export const LoginForm = ({isSubmitting, status}) => {
  return (
    <Form>
      <div>
        <Field
          name={'email'}
          type={'email'}
          placeholder={'Email'}
        />
      </div>
      <ErrorMessage name="email" component="div" className={classes.error} />
      <div>
        <Field
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          autoComplete="on"
        />
      </div>
      <ErrorMessage name="password" component="div" className={classes.error} />
      <div>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          id="rememberMe"
        />
        <label htmlFor={'rememberMe'}>remember me</label>
      </div>
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
