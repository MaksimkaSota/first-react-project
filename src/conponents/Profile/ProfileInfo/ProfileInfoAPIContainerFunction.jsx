import React, { useEffect } from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfo } from './ProfileInfo';
import { useNavigate, useParams } from 'react-router-dom';

export const ProfileInfoAPIContainerFunction = ({
                                                  profile,
                                                  getProfile,
                                                  authorizedUserId,
                                                  getStatus,
                                                  status,
                                                  updateStatus
                                                }) => {
  let {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      id = authorizedUserId;
      if (!id) {
        navigate('/login');
      }
    }

    if (id) {
      getProfile(id);
      getStatus(id);
    }
  }, [id]);

  return (
    <>
      {
        !profile ?
          <Preloader /> :
          <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      }
    </>
  );
};
