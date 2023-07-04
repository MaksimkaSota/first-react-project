import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = ({store}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
