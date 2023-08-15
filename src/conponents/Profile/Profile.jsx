import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileError } from '../ErrorComponents/ProfileError/ProfileError';

export const Profile = ({error, setError}) => {
  // for test Error Boundary
  // console.log(windows.x.x.x.x);

  if (error.isError) {
    return (
      <div>
        <ProfileError
          error={error}
          setError={setError}
          content={
            <div>
              <ProfileInfoContainer />
              <MyPostsContainer />
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
};
