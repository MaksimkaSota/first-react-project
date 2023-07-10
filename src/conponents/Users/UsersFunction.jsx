import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import { useEffect } from 'react';

export const Users = ({users, follow, unfollow, setUsers}) => {
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        setUsers(response.data.items);
      })
  }, []);

  const onUnfollow = (id) => () => {
    unfollow(id);
  };
  const onFollow = (id) => () => {
    follow(id);
  };

  return (
    <div>
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <img className={classes.userPhoto} src={user.photos.small ? user.photos.small : userPhoto}
                       alt="avatar" />
                </div>
                <div>
                  {
                    user.followed ?
                      <button onClick={onUnfollow(user.id)}>Unfollow</button> :
                      <button onClick={onFollow(user.id)}>Follow</button>
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
          )
        })
      }
    </div>
  );
};
