import classes from './MyPosts.module.css';
import { Post } from './Post/Post';
import { MyPostFormContainer } from './Post/MyPostForm/MyPostFormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import { useCallback } from 'react';
import { useActions } from '../../../Hooks/useActions';
import { usePosts } from './usePosts';

export const MyPosts = () => {
  // const posts = useSelector((state) => state.profilePage.posts);

  // const { onAddPost } = useActions();
  // or
  // const dispatch = useDispatch();
  // const onAddPost = useCallback(
  //   (text) => dispatch(addPost(text)),
  //   [dispatch]
  // );

  const {posts, onAddPost} = usePosts();

  const postsElements = posts
    .map((post, index) => <Post message={post.message} numberOfLike={post.numberOfLike} key={index} />);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostFormContainer addPost={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
