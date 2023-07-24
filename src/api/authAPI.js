import { http } from './http';

export const getAuthAPI = async () => {
  const response = await http.get(`auth/me`);
  return await response.data;
};

export const loginAPI = async (myEmail, myPassword, rememberMe = false) => {
  const response = await http.post(`auth/login`, {email: myEmail, password: myPassword, rememberMe: rememberMe,});
  return await response.data;
};

export const logoutAPI = async () => {
  const response = await http.delete(`auth/login`);
  return await response.data;
};
