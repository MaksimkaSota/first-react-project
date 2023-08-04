import { ProfileDataForm } from './ProfileDataForm';
import { Formik, useFormikContext } from 'formik';
import { DialogsForm } from '../../../Dialogs/DialogsForm/DialogsForm';
import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { createField } from '../../../../utilits/helpers/form-heplers';

const validationSchemaDialogsForm = Yup.object().shape({
  text: Yup.string()
    .max(50, 'Must be shorter than 50 characters')
    .required('Required')
});

export const ProfileDataFormContainer = ({profile}) => {
  const [editModeSkills, setEditModeSkills] = useState(false);

  const submit = (formData, {setSubmitting, resetForm}) => {
    // addMessage(formData.text);
    // setSubmitting(false);
    // resetForm();
  }

  return (
    <Formik
      initialValues={{
        fullName: '',
        lookingForAJob: false,
        myProfessionalSkills: ''
      }}
      validationSchema={validationSchemaDialogsForm}
      onSubmit={submit}
    >
      {({isSubmitting, setFieldValue}) => (
        <ProfileDataForm
          isSubmitting={isSubmitting}
          setFieldValue={setFieldValue}
          editModeSkills={editModeSkills}
          setEditModeSkills={setEditModeSkills}
        />
      )}
    </Formik>
  );
};
