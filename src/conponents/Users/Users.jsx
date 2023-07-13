import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

export const Users = ({users, page, count, totalCount, onFollow, onUnfollow, onSetCurrentPage}) => {
  const pagesCount = Math.ceil(totalCount / count);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let slicedPages;
  let curPage = page;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

  return (
    <div>
      <div>
        {slicedPages.map((slicedPage, index) => {
          return (
            <span
              className={slicedPage === page ? classes.selectedPage : ''}
              key={index}
              onClick={onSetCurrentPage(slicedPage)}>
              {slicedPage}
            </span>
          )
        })}
      </div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <div>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={classes.userPhoto}
                    src={user.photos.small ? user.photos.small : userPhoto}
                    alt="avatar" />
                </NavLink>
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
      })}
    </div>
  );
};
