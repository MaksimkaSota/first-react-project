import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({profileState, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profileState.posts} postText={profileState.postText} dispatch={dispatch} />
    </div>
  );
};
