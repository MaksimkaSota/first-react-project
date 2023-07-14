import { http } from './http';

export const profileAPI = {
  getProfile(userId) {
    return http.get(`profile/${userId}`)
      .then(response => response.data)
  }
}
