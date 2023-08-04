import { ErrorMessage, Form } from 'formik';
import classes from './MyPostForm.module.css';
// import { createField } from '../../../../../utilits/helpers/form-heplers';

export const MyPostForm = ({isSubmitting}) => {
  return (
    <Form>
      {/*{createField('text', 'textarea', 'Text')}*/}
      {/*<ErrorMessage name="text" component="div" className={classes.error} />*/}
      {/*<button type={'submit'} disabled={isSubmitting}>Add post</button>*/}
    </Form>
  );
};
