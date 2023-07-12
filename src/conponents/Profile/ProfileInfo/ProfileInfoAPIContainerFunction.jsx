import React, { useEffect } from 'react';
import axios from 'axios';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';

export const ProfileInfoAPIContainerFunction = ({profile, isFetching, getProfile, setIsFetching}) => {
  useEffect(() => {
    setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        getProfile(response.data);
        setIsFetching(false);
      })
  }, []);

  return (
    <>
      {
        isFetching ?
          <Preloader /> :
          <ProfileInfo profile={profile} />
      }
    </>
  )
}

