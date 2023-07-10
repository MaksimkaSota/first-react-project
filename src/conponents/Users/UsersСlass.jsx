import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
  }

  onUnfollow = (id) => () => {
    this.props.unfollow(id);
  };
  onFollow = (id) => () => {
    this.props.follow(id);
  };

  render() {
    return (
      <div>
        {
          this.props.users.map((user, index) => {
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
                        <button onClick={this.onUnfollow(user.id)}>Unfollow</button> :
                        <button onClick={this.onFollow(user.id)}>Follow</button>
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
  }
}
