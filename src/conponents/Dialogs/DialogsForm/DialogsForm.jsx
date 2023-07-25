import { ErrorMessage, Field, Form } from 'formik';
import classes from './DialogsForm.module.css';

export const DialogsForm = ({isSubmitting}) => {
  return (
    <Form>
      <div>
        <Field
          name={'text'}
          type={'textarea'}
          placeholder={'Text'}
        />
      </div>
      <ErrorMessage name="text" component="div" className={classes.error} />
      <button type={'submit'} disabled={isSubmitting}>Add message</button>
    </Form>
  );
};
