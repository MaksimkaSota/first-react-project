import { addPostActionCreator, setPostActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = ({store}) => {
  const state = store.getState();

  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const setPost = (text) => {
    const action = setPostActionCreator(text);
    store.dispatch(action);
  }

  return (
    <MyPosts profileState={state.profilePage} addPost={addPost} setPost={setPost} />
  );
};
