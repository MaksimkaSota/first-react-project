import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({profileState, addPostInState, setPostInState}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={profileState.posts} postText={profileState.postText} addPostInState={addPostInState} setPostInState={setPostInState} />
    </div>
  );
};
