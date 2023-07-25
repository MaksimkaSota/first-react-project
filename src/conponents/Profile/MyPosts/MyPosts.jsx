import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostFormContainer } from './Post/MyPostForm/MyPostFormContainer';

export const MyPosts = ({posts, addPost}) => {
  const postsElements = posts
    .map((post, index) => <Post message={post.message} numberOfLike={post.numberOfLike} key={index} />);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostFormContainer addPost={addPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
