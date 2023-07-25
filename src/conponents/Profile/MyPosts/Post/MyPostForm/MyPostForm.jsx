import { ErrorMessage, Field, Form } from 'formik';
import classes from './MyPostForm.module.css';

export const MyPostForm = ({isSubmitting}) => {
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
      <button type={'submit'} disabled={isSubmitting}>Add post</button>
    </Form>
  );
};
