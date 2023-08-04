import { Form } from 'formik';
import { FormField } from '../../../common/FormField/FormField';
import { useState } from 'react';

export const ProfileDataForm = ({isSubmitting, setFieldValue, handleChange}) => {
  const [editModeSkills, setEditModeSkills] = useState(false);

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
          handleChange={handleChange}
        />
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
      </div>
      {
        editModeSkills &&
        <div>
          <b>My professional skills</b>:
          <FormField
            name={'lookingForAJobDescription'}
            type={'textarea'}
            placeholder={'My professional skills'}
            handleChange={handleChange}
          />
        </div>
      }
      <div>
        <b>About me</b>:
        <FormField
          name={'aboutMe'}
          type={'textarea'}
          placeholder={'About me'}
          handleChange={handleChange}
        />
      </div>
      <div>
        <b>Contacts</b>:
        {
          // Object.entries(profile.contacts).map((contact, index) => {
          //   return (
          //     <Contact contactTitle={contact[0]} contactValue={contact[1]} key={index} />
          //   );
          // })
        }
      </div>
      {/*<ErrorMessage name="text" component="div" className={classes.error} />*/}
    </Form>
  );
};
