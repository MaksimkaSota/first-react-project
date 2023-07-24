import React, { useEffect } from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { useParams } from 'react-router-dom';

export const ProfileInfoAPIContainerFunction = ({profile, isFetching, getProfile, authorizedUserId}) => {
  let {id} = useParams();
  if (!id) {
    id = authorizedUserId;
  }
  useEffect(() => {
    getProfile(id);
  }, []);

  return (
    <>
      {
        isFetching ?
          <Preloader /> :
          <ProfileInfo profile={profile} />
      }
    </>
  );
};
