import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataFormContainer } from './ProfileDataForm/ProfileDataFormContainer';
// import { ProfileStatusFunction } from './ProfileStatus/ProfileStatusFunction';

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  }

  const onChangeEditMode = () => {
    setEditMode(true);
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.userPhoto}
          src={profile.photos.large || userPhoto}
          alt="avatar"
        />
        {
          isOwner &&
          <div>
            <input type="file" onChange={onMainPhotoSelected} />
          </div>
        }
        {
          editMode ?
            <ProfileDataFormContainer profile={profile} /> :
            <ProfileData profile={profile} isOwner={isOwner} onChangeEditMode={onChangeEditMode}/>
        }
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <Test />
      </div>
    </div>
  );
};

const Test = React.memo(() => {
  console.log('render');
  return (
    <div>
      TEST
    </div>
  );
});
