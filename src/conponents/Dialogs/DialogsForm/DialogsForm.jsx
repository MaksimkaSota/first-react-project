import { ErrorMessage, Form } from 'formik';
import classes from './DialogsForm.module.css';
import { createField } from '../../../utilits/helpers/form-heplers';

export const DialogsForm = ({isSubmitting}) => {
  return (
    <Form>
      {createField('text', 'textarea', 'Text')}
      <ErrorMessage name="text" component="div" className={classes.error} />
      <button type={'submit'} disabled={isSubmitting}>Add message</button>
    </Form>
  );
};
