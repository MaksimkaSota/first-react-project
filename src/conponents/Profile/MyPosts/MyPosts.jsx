import { useRef } from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = ({profileState, addPost, setPost}) => {
  const postsElements = profileState.posts
    .map((post, index) => <Post message={post.message} numberOfLike={post.numberOfLike} key={index} />);
  const postText = profileState.postText;

  const onAddPost = () => {
    addPost();
  };

  const onSetPost = (event) => {
    const text = event.target.value;
    setPost(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onSetPost} value={postText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
