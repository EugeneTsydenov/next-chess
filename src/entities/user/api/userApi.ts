import { $axios, $privateAxios } from '@/shared/config';

export class UserApi {
  public static getUser() {
    return $privateAxios.get('/user');
  }

  public static getUserById(id: string) {
    return $axios.get(`/user/${id}`);
  }
}
