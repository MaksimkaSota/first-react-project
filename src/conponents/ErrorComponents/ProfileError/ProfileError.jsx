import classes from './ProfileError.module.css';
import imgError from '../../../assets/images/error.JPG';

export const ProfileError = ({error, setError, content}) => {
  const onClickCloseButton = () => {
    setError(false, '');
  };
  const onClickErrorContainer = (event) => {
    if (event.currentTarget.className === event.target.className) {
      setError(false, '');
    }
  };

  if (error.isError) {
    return (
      <div className={classes.errorContainer} onClick={onClickErrorContainer}>
        <p className={classes.errorText}>Ошика: <span>${error.message}</span> !</p>
        <div className={classes.errorImgContainer}>
          <img src={imgError} alt="error" />
        </div>
        <button className={classes.closeButton} onClick={onClickCloseButton}>Закрыть</button>
      </div>
    )
  }
  return content;
};
