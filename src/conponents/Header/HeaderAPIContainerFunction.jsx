import React, { useEffect } from 'react';
import { http } from '../../http';
import { Header } from './Header';

export const ProfileInfoAPIContainerFunction = ({login, isAuth, getAuthUserData}) => {
  useEffect(() => {
    http.get(`auth/me`)
      .then((response) => {
        if (response.data.resultCode === 0) {
          getAuthUserData(response.data.data);
        }
      })
  }, []);

  return (
    <Header login={login} isAuth={isAuth} />
  )
}

