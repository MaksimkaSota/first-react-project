import React, { useEffect } from 'react';
import axios from 'axios';
import { Users } from './Users';

export const UsersAPIContainerFunction = ({
                                            users,
                                            page,
                                            count,
                                            totalCount,
                                            follow,
                                            unfollow,
                                            setCurrentPage,
                                            getUsers,
                                            getTotalCount
                                          }) => {
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        getUsers(response.data.items);
        getTotalCount(response.data.totalCount);
      })
  }, []);

  const onSetCurrentPage = (page) => () => {
    setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((response) => {
        getUsers(response.data.items);
      })
  }

  return (
    <Users
      users={users}
      page={page}
      count={count}
      totalCount={totalCount}
      follow={follow}
      unfollow={unfollow}
      onSetCurrentPage={onSetCurrentPage}
    />
  );
};
