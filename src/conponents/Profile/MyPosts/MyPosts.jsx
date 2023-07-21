import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostReduxForm } from './Post/MyPostForm/MyPostForm';

export const MyPosts = ({posts, addPost}) => {
  const postsElements = posts
    .map((post, index) => <Post message={post.message} numberOfLike={post.numberOfLike} key={index} />);

  const onSubmitPost = (formData) => {
    addPost(formData.text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={onSubmitPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
