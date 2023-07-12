import classes from './ProfileInfo.module.css';

export const ProfileInfo = ({profile}) => {
  return (
    <div>
      <div>
        <img className={classes.image}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG/1200px-POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG"
             alt="main" />
      </div>
      <div className={classes.descriptionBlock}>
        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <img src={profile.photos.large} alt="" />
        ava + desc
      </div>
    </div>
  );
};
