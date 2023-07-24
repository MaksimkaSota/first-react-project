import React, { useEffect } from 'react';
import { Header } from './Header';

export const HeaderAPIContainerFunction = ({login, isAuth, getAuthUserData, logout}) => {
  useEffect(() => {
    getAuthUserData();
  }, []);

  return (
    <Header login={login} isAuth={isAuth} logout={logout} />
  );
};
