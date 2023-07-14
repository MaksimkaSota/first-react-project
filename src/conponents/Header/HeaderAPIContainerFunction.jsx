import React, { useEffect } from 'react';
import { Header } from './Header';
import { authAPI } from '../../api/authAPI';

export const ProfileInfoAPIContainerFunction = ({login, isAuth, getAuthUserData}) => {
  useEffect(() => {
    authAPI.getAuth().then((data) => {
        if (data.resultCode === 0) {
          getAuthUserData(data.data);
        }
      })
  }, []);

  return (
    <Header login={login} isAuth={isAuth} />
  )
}

