import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addPost } from '../../../redux/profile-reducer';

export const usePosts = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const dispatch = useDispatch();
  const onAddPost = useCallback(
    (text) => dispatch(addPost(text)),
    [dispatch]
  );
  return {posts, onAddPost};
};
