import classes from './User.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

export const User = ({user, subscriptionsId, onFollow, onUnfollow}) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={classes.userPhoto}
              src={user.photos.small || userPhoto}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {
            user.followed ?
              <button
                disabled={subscriptionsId.includes(user.id)}
                onClick={onUnfollow(user.id)}>
                Unfollow
              </button> :
              <button
                disabled={subscriptionsId.includes(user.id)}
                onClick={onFollow(user.id)}>
                Follow
              </button>
          }
        </div>
      </div>
      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{'user.location.city'}</div>
          <div>{'user.location.country'}</div>
        </div>
      </div>
    </div>
  );
};
