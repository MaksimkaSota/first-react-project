import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
// import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
  // for test Error Boundary
  // console.log(windows.x.x.x.x);

  return (
    <div>
      <ProfileInfoContainer />
      <MyPosts />
      {/*<MyPostsContainer />*/}
    </div>
  );
};
