import { http } from './http';

export const getProfileAPI = async (userId) => {
  const response = await http.get(`profile/${userId}`);
  return await response.data;
};

export const getStatusAPI = async (userId) => {
  const response = await http.get(`profile/status/${userId}`);
  return await response.data;
};

export const updateStatusAPI = async (myStatus) => {
  const response = await http.put(`profile/status`, {status: myStatus});
  return await response.data;
};

