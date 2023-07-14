import { http } from './http';

export const authAPI = {
  getAuth() {
    return http.get(`auth/me`)
      .then(response => response.data)
  }
}
