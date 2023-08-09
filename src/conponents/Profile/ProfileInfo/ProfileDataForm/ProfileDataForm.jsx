import { Form } from 'formik';
import { FormField } from '../../../common/FormField/FormField';
import { useState } from 'react';
import classes from './ProfileDataForm.module.css';
import { FormServerError } from '../../../common/FormServerError/FormServerError';

const ContactForm = ({contactTitle, contactName, handleChange, status}) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>:
      <FormField name={contactName} type={'text'} placeholder={contactTitle} callback={handleChange} />
      {
        (status && status.contacts && status.contacts[contactTitle]) &&
        <div className={classes.formSummaryError}>
          {status.contacts[contactTitle]}
        </div>
      }
    </div>
  )
};

export const ProfileDataForm = ({profile, isSubmitting, status, handleChange, setFieldValue}) => {
  const [editModeSkills, setEditModeSkills] = useState(profile.lookingForAJob || false);

  const onChangeEditModeSkills = (event) => {
    setFieldValue('lookingForAJob', event.target.checked);
    setEditModeSkills(event.target.checked);
  };

  return (
    <Form>
      <button type={'submit'} disabled={isSubmitting}>Save</button>
      <div>
        <b>Full name</b>:
        <FormField
          name={'fullName'}
          type={'text'}
          placeholder={'Full name'}
          callback={handleChange}
        />
        <FormServerError status={status} name={'fullName'} />
      </div>
      <div>
        <b>Looking for a job</b>:
        <FormField
          name={'lookingForAJob'}
          type={'checkbox'}
          props={{id: 'rememberMe'}}
          text={'looking for a job'}
          callback={onChangeEditModeSkills}
        />
        <FormServerError status={status} name={'lookingForAJob'} />
      </div>
      {
        editModeSkills &&
        <div>
          <b>My professional skills</b>:
          <FormField
            name={'lookingForAJobDescription'}
            type={'textarea'}
            placeholder={'My professional skills'}
            callback={handleChange}
          />
          <FormServerError status={status} name={'lookingForAJobDescription'} />
        </div>
      }
      <div>
        <b>About me</b>:
        <FormField
          name={'aboutMe'}
          type={'textarea'}
          placeholder={'About me'}
          callback={handleChange}
        />
        <FormServerError status={status} name={'aboutMe'} />
      </div>
      <div>
        <b>Contacts</b>:
        {
          Object.keys(profile.contacts).map((contactKey, index) => {
            return (
              <ContactForm
                contactTitle={contactKey}
                contactName={`contacts.${contactKey}`}
                handleChange={handleChange}
                status={status}
                key={index}
              />
            );
          })
        }
      </div>
    </Form>
  );
};
