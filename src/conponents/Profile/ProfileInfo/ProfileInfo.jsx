import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
// import { ProfileStatusFunction } from './ProfileStatus/ProfileStatusFunction';

export const ProfileInfo = ({profile}) => {
  return (
    <div>
      {/*<div>*/}
      {/*  <img className={classes.image}*/}
      {/*       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG/1200px-POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG"*/}
      {/*       alt="main" />*/}
      {/*</div>*/}
      <div className={classes.descriptionBlock}>
        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <img
          className={classes.userPhoto}
          src={profile.photos.large ? profile.photos.large : userPhoto}
          alt="avatar"
        />
        <ProfileStatus status={'hi my friends'} />
      </div>
    </div>
  );
};
