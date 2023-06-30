import { useRef } from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import { addPostActionCreator, setPostActionCreator } from '../../../redux/state';

export const MyPosts = ({posts, postText, dispatch}) => {
  const postsElements = posts
    .map((post, index) => <Post message={post.message} numberOfLike={post.numberOfLike} key={index} />)

  const newPostElement = useRef(null);

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const setPost = () => {
    const text = newPostElement.current.value;
    const action = setPostActionCreator(text)
    dispatch(action);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={setPost} ref={newPostElement} value={postText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
