import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.image}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt="main" />
      </div>
      <div className={classes.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
};
