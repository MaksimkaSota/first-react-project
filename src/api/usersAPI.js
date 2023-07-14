import { http } from './http';

export const usersAPI = {
  getUsers(page, count) {
    return http.get(`users?page=${page}&count=${count}`)
      .then(response => response.data);
  }
}
