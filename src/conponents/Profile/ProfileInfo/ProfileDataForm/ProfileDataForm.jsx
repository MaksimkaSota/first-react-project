import { ErrorMessage, Form } from 'formik';
import { CreateField, createField } from '../../../../utilits/helpers/form-heplers';
import classes from '../../../Dialogs/DialogsForm/DialogsForm.module.css';

export const ProfileDataForm = ({profile, isSubmitting, onChangeEditMode, editModeSkills, values}) => {
  return (
    <Form>
      <button type={'submit'} disabled={isSubmitting}>Save</button>
      <div>
        <b>Full name</b>:
        {/*{createField('fullName', 'text', 'Full name')}*/}
      </div>
      <div>
        <b>Looking for a job</b>:
        <CreateField name={'lookingForAJob'} type={'checkbox'} props1={{id: 'rememberMe'}} text={'looking for a job'} callback={onChangeEditMode} values={values} />
      </div>
      {
        editModeSkills &&
        <div>
          <b>My professional skills</b>:
          {/*{createField('myProfessionalSkills', 'textarea', 'My professional skills')}*/}
        </div>
      }
      {/*<div>*/}
      {/*  <b>About me</b>: {profile.aboutMe}*/}
      {/*</div>*/}
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
