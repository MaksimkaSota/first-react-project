import React, { useEffect } from 'react';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { followAPI } from '../../api/followAPI';
import { usersAPI } from '../../api/usersAPI';

export const UsersAPIContainerFunction = ({
                                            users,
                                            page,
                                            count,
                                            totalCount,
                                            isFetching,
                                            subscriptionsId,
                                            follow,
                                            unfollow,
                                            setCurrentPage,
                                            getUsers,
                                            getTotalCount,
                                            setIsFetching,
                                            setSubscriptionsId
                                          }) => {
  useEffect(() => {
    setIsFetching(true);
    usersAPI.getUsers(page, count).then((data) => {
      getUsers(data.items);
      getTotalCount(data.totalCount);
      setIsFetching(false);
    })
  }, []);

  const onSetCurrentPage = (page) => () => {
    setIsFetching(true);
    setCurrentPage(page);
    usersAPI.getUsers(page, count).then((data) => {
      getUsers(data.items);
      setIsFetching(false);
    })
  }
  const onFollow = (id) => () => {
    setSubscriptionsId(id, true);
    followAPI.follow(id).then((data) => {
      if (data.resultCode === 0) {
        follow(id);
      }
      setSubscriptionsId(id, false);
    })
  };
  const onUnfollow = (id) => () => {
    setSubscriptionsId(id, true);
    followAPI.unfollow(id).then((data) => {
      if (data.resultCode === 0) {
        unfollow(id);
      }
      setSubscriptionsId(id, false);
    })
  };

  return (
    <>
      {
        isFetching ?
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
