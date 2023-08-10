import { ProfileDataForm } from './ProfileDataForm';
import { Formik } from 'formik';

export const ProfileDataFormContainer = ({profile, saveProfile, setEditMode}) => {
  const initialValue = {
    lookingForAJob: profile.lookingForAJob || false,
    lookingForAJobDescription: profile.lookingForAJobDescription || '',
    fullName: profile.fullName || '',
    aboutMe: profile.aboutMe || '',
    contacts: {
      github: profile.github || '',
      vk: profile.vk || '',
      facebook: profile.facebook || '',
      instagram: profile.instagram || '',
      twitter: profile.twitter || '',
      website: profile.website || '',
      youtube: profile.youtube || '',
      mainLink: profile.mainLink || ''
    }
  }

  const submit = async (formData, {setStatus, setSubmitting}) => {
    try {
      await saveProfile(formData, setStatus, setSubmitting, initialValue);
      setEditMode(false);
    } catch {
      alert('Fix form errors');
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submit}
    >
      {({isSubmitting, status, handleChange, setFieldValue}) => (
        <ProfileDataForm
          profile={profile}
          isSubmitting={isSubmitting}
          status={status}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
};
