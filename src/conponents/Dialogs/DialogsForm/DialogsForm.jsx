import { ErrorMessage, Form } from 'formik';
import classes from './DialogsForm.module.css';
import { FormField } from '../../common/FormField/FormField';

export const DialogsForm = ({isSubmitting, handleChange}) => {
  return (
    <Form>
      <FormField name={'text'} type={'textarea'} placeholder={'Text'} callback={handleChange}/>
      <ErrorMessage name="text" component="div" className={classes.error} />
      <button type={'submit'} disabled={isSubmitting}>Add message</button>
    </Form>
  );
};
