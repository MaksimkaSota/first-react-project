import React, { useEffect } from 'react';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

export const UsersAPIContainerFunction = ({
                                            users,
                                            page,
                                            count,
                                            totalCount,
                                            subscriptionsId,
                                            follow,
                                            unfollow,
                                            getUsers,
                                          }) => {
  useEffect(() => {
    getUsers(page, count);
  }, []);

  const onSetCurrentPage = (page) => () => {
    getUsers(page, count);
  }
  const onFollow = (id) => () => {
    follow(id);
  };
  const onUnfollow = (id) => () => {
    unfollow(id);
  };

  return (
    <>
      {
        !users.length ?
          <Preloader /> :
          <Users
            users={users}
            page={page}
            count={count}
            totalCount={totalCount}
            subscriptionsId={subscriptionsId}
            onFollow={onFollow}
            onUnfollow={onUnfollow}
            onSetCurrentPage={onSetCurrentPage}
          />
      }
    </>
  );
};
