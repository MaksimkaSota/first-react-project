import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { setPostInState } from '../../redux/state';

export const Profile = ({profileState, addPostInState}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profileState.posts} postText={profileState.postText} addPostInState={addPostInState} setPostInState={setPostInState} />
    </div>
  );
};
