import { $privateAxios } from '@/shared/config';

export class UserApi {
  public static getUser() {
    return $privateAxios.get('/user');
  }
}
