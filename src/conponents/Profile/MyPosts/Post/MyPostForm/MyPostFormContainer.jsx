import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyPostForm } from './MyPostForm';

const validationSchemaMyPostForm = Yup.object().shape({
  text: Yup.string()
    .max(50, 'Must be shorter than 50 characters')
    .required('Required')
});

export const MyPostFormContainer = ({addPost}) => {
  const submit = (formData, {setSubmitting, resetForm}) => {
    setSubmitting(false);
    addPost(formData.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={{text: ''}}
      validationSchema={validationSchemaMyPostForm}
      onSubmit={submit}
    >
      {({isSubmitting, handleChange}) => (
        <MyPostForm isSubmitting={isSubmitting} handleChange={handleChange} />
      )}
    </Formik>
  );
};
