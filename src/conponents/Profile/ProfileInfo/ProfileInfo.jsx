import React from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
// import { ProfileStatusFunction } from './ProfileStatus/ProfileStatusFunction';

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <img
          className={classes.userPhoto}
          src={profile.photos.large || userPhoto}
          alt="avatar"
        />
        {
          isOwner &&
          <div>
            <input type="file" onChange={onMainPhotoSelected}/>
          </div>
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
