import React, { useEffect } from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { useParams } from 'react-router-dom';
import { profileAPI } from '../../../api/profileAPI';

export const ProfileInfoAPIContainerFunction = ({profile, isFetching, getProfile, setIsFetching}) => {
  let { id } = useParams();
  if (!id) {
    id = 2
  }
  useEffect(() => {
    setIsFetching(true);
    profileAPI.getProfile(id).then((data) => {
        getProfile(data);
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

