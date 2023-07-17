import { http } from './http';

export const getProfileAPI = (userId) => {
  return http.get(`profile/${userId}`)
    .then(response => response.data);
};
