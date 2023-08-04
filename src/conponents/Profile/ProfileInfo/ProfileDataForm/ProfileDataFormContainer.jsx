import { ProfileDataForm } from './ProfileDataForm';
import { Formik } from 'formik';
// import * as Yup from 'yup';

// const validationSchemaDialogsForm = Yup.object().shape({
//   text: Yup.string()
//     .max(50, 'Must be shorter than 50 characters')
//     .required('Required')
// });

export const ProfileDataFormContainer = () => {
  const submit = (formData, {setSubmitting, resetForm}) => {
    console.log(formData);
    setSubmitting(false);
    // addMessage(formData.text);
    // setSubmitting(false);
    // resetForm();
  }

  return (
    <Formik
      initialValues={{
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: ''
      }}
      // validationSchema={validationSchemaDialogsForm}
      onSubmit={submit}
    >
      {({isSubmitting, setFieldValue, handleChange}) => (
        <ProfileDataForm
          isSubmitting={isSubmitting}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
        />
      )}
    </Formik>
  );
};
