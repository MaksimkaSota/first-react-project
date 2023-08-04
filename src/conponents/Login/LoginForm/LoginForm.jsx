import { ErrorMessage, Form } from 'formik';
import classes from './LoginForm.module.css';
// import { createField } from '../../../utilits/helpers/form-heplers';

export const LoginForm = ({isSubmitting, status}) => {
  return (
    <Form>
      {/*{createField('email', 'email', 'Email')}*/}
      {/*<ErrorMessage name="email" component="div" className={classes.error} />*/}
      {/*{createField('password', 'password', 'Password', {autoComplete: 'on'})}*/}
      {/*<ErrorMessage name="password" component="div" className={classes.error} />*/}
      {/*{createField('rememberMe', 'checkbox', null, {id: 'rememberMe'}, 'remember me')}*/}
      {/*{*/}
      {/*  status &&*/}
      {/*  <div className={classes.formSummaryError}>*/}
      {/*    {status}*/}
      {/*  </div>*/}
      {/*}*/}
      {/*<button type={'submit'} disabled={isSubmitting}>Login</button>*/}
    </Form>
  );
};
