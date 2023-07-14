import { http } from './http';

export const followAPI = {
  follow(id) {
    return http.post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollow(id) {
    return http.delete(`follow/${id}`)
      .then(response => response.data)
  }
}
