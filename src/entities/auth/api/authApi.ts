import { $axios } from '@/shared/config';

export class AuthApi {
  public static refresh() {
    return $axios.get('/refresh');
  }
}
