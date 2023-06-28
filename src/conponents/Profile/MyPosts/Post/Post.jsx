import classes from './Post.module.css';

export const Post = ({message, numberOfLike}) => {
  return (
    <div className={classes.item}>
      <img
        src="https://avatars.mds.yandex.net/i?id=7808f22d2c74cc72b53378dc5b5479650088c558-7663734-images-thumbs&n=13"
        alt="avatar" />
      {message}
      <div>
        <span>like</span> {numberOfLike}
      </div>
    </div>
  );
};
