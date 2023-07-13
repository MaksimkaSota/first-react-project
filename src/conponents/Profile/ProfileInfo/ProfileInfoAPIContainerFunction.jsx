import React, { useEffect } from 'react';
import axios from 'axios';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { useParams } from 'react-router-dom';

export const ProfileInfoAPIContainerFunction = ({profile, isFetching, getProfile, setIsFetching}) => {
  let { id } = useParams();
  if (!id) {
    id = 2
  }
  useEffect(() => {
    setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
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

