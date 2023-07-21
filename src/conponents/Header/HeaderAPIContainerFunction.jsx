import React, { useEffect } from 'react';
import { Header } from './Header';

export const HeaderAPIContainerFunction = ({login, isAuth, getAuthUserData}) => {
  useEffect(() => {
    getAuthUserData();
  }, []);

  return (
    <Header login={login} isAuth={isAuth} />
  );
};
