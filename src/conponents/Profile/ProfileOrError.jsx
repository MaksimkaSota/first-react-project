import { ProfileError } from '../ErrorComponents/ProfileError/ProfileError';
import { Profile } from './Profile';

export const ProfileOrError = ({error, setError}) => {
  if (error.isError) {
    return (
      <div>
        <ProfileError
          error={error}
          setError={setError}
          content={<Profile />}
        />
      </div>
    );
  }
  return <Profile />;
};
