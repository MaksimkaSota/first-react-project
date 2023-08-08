import { ErrorMessage, Form } from 'formik';
import classes from './MyPostForm.module.css';
import { FormField } from '../../../../common/FormField/FormField';

export const MyPostForm = ({isSubmitting, handleChange}) => {
  return (
    <Form>
      <FormField name={'text'} type={'textarea'} placeholder={'Text'} callback={handleChange} />
      <ErrorMessage name="text" component="div" className={classes.error} />
      <button type={'submit'} disabled={isSubmitting}>Add post</button>
    </Form>
  );
};
