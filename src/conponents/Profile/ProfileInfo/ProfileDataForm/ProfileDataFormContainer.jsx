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
  // const {setFieldValue} = useFormikContext();

  const submit = (formData, {setSubmitting, resetForm}) => {
    // addMessage(formData.text);
    // setSubmitting(false);
    // resetForm();
  }

  // const onChangeEditMode = useCallback((event) => {
  //   setFieldValue('lookingForAJob', event.target.checked)
  //   // console.log(event.target.checked);
  //   event.target.checked ? setEditModeSkills(true) : setEditModeSkills(false);
  // }, [setFieldValue]);

  const onChangeEditMode = (event) => {
    console.log(event.target.checked);
    event.target.checked ? setEditModeSkills(true) : setEditModeSkills(false);
  };

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
      {({values, isSubmitting}) => (
        <ProfileDataForm
          profile={profile}
          isSubmitting={isSubmitting}
          onChangeEditMode={onChangeEditMode}
          editModeSkills={editModeSkills}
          values={values}
        />
      )}
    </Formik>
  );
};
