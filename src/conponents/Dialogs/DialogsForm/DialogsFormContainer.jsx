import { Formik } from 'formik';
import * as Yup from 'yup';
import { DialogsForm } from './DialogsForm';

const validationSchemaDialogsForm = Yup.object().shape({
  text: Yup.string()
    .max(50, 'Must be shorter than 50 characters')
    .required('Required')
});

export const DialogsFormContainer = ({addMessage}) => {
  const submit = (formData, {setSubmitting, resetForm}) => {
    setSubmitting(false);
    addMessage(formData.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={{text: ''}}
      validationSchema={validationSchemaDialogsForm}
      onSubmit={submit}
    >
      {({isSubmitting, handleChange}) => (
        <DialogsForm isSubmitting={isSubmitting} handleChange={handleChange} />
      )}
    </Formik>
  );
};
