import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';

const validationSchemaLoginForm = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required password'),
  password: Yup.string()
    .min(3, 'Must be longer than 3 characters')
    .max(10, 'Must be shorter than 10 characters')
    .required('Required password')
});

export const LoginFormContainer = ({login}) => {
  const submit = (formData, {setStatus, setSubmitting}) => {
    login(formData.email, formData.password, formData.rememberMe, setStatus, setSubmitting);
    setSubmitting(true);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      validationSchema={validationSchemaLoginForm}
      onSubmit={submit}
    >
      {({isSubmitting, status, handleChange}) => (
        <LoginForm isSubmitting={isSubmitting} status={status} handleChange={handleChange} />
      )}
    </Formik>
  );
};
