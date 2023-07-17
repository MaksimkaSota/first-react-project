import { http } from './http';

export const getProfileAPI = async (userId) => {
  const response = await http.get(`profile/${userId}`);
  return await response.data;
};
