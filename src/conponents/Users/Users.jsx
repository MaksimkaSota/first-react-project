import classes from './Users.module.css';

export const Users = ({users, follow, unfollow, setUsers}) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        photoURL: 'https://peopleinmedia.org/wp-content/uploads/ext/m/c/mc2n0a1fpjbp0.jpg',
        followed: true,
        fullName: 'Hi, how are you?',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        photoURL: 'https://peopleinmedia.org/wp-content/uploads/ext/m/c/mc2n0a1fpjbp0.jpg',
        followed: false,
        fullName: 'It\'s my first post',
        status: 'I am a boss too',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 3,
        photoURL: 'https://peopleinmedia.org/wp-content/uploads/ext/m/c/mc2n0a1fpjbp0.jpg',
        followed: false,
        fullName: 'Blabla',
        status: 'I am a boss too',
        location: {city: 'Kiev', country: 'Ukraine'}
      }
    ]);
  }

  const onUnfollow = (id) => () => { unfollow(id); };
  const onFollow = (id) => () => { follow(id); };

  return (
    <div>
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <img className={classes.userPhoto} src={user.photoURL} alt="avatar" />
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
                  <div>{user.fullName}</div>
                  <div>{user.status}</div>
                </div>
                <div>
                  <div>{user.location.city}</div>
                  <div>{user.location.country}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
