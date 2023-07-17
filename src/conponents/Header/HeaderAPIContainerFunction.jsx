import React, { useEffect } from 'react';
import { Header } from './Header';

export const ProfileInfoAPIContainerFunction = ({login, isAuth, getAuthUserData}) => {
  useEffect(() => {
    getAuthUserData();
  }, []);

  return (
    <Header login={login} isAuth={isAuth} />
  );
};
