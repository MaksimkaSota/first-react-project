import React, { useEffect } from 'react';
import axios from 'axios';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { http } from '../../http';

export const UsersAPIContainerFunction = ({
                                            users,
                                            page,
                                            count,
                                            totalCount,
                                            isFetching,
                                            follow,
                                            unfollow,
                                            setCurrentPage,
                                            getUsers,
                                            getTotalCount,
                                            setIsFetching
                                          }) => {
  useEffect(() => {
    setIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        getUsers(response.data.items);
        getTotalCount(response.data.totalCount);
        setIsFetching(false);
      })
  }, []);

  const onSetCurrentPage = (page) => () => {
    setIsFetching(true);
    setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((response) => {
        getUsers(response.data.items);
        setIsFetching(false);
      })
  }
  const onFollow = (id) => () => {
    http.post(`follow/${id}`)
      .then((response) => {
        if (response.data.resultCode === 0) {
          follow(id);
        }
      })
  };
  const onUnfollow = (id) => () => {
    http.delete(`follow/${id}`)
      .then((response) => {
        if (response.data.resultCode === 0) {
          unfollow(id);
        }
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
            onFollow={onFollow}
            onUnfollow={onUnfollow}
            onSetCurrentPage={onSetCurrentPage}
          />
      }
    </>
  );
};
