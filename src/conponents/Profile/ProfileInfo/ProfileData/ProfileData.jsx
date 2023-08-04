import classes from './ProfileData.module.css';

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  )
}

export const ProfileData = ({profile, isOwner, onChangeEditMode}) => {
  return (
    <div>
      {
        isOwner &&
        <div>
          <button onClick={onChangeEditMode}>Edit</button>
        </div>
      }
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {
        profile.lookingForAJob &&
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {
          Object.entries(profile.contacts).map((contact, index) => {
            return (
              <Contact contactTitle={contact[0]} contactValue={contact[1]} key={index} />
            );
          })
        }
      </div>
    </div>
  );
};
