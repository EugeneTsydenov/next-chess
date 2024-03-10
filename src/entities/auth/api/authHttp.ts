import { parseTokensCookieHelper } from '@/entities/auth/lib/helpers/parseTokensCookieHelper';
import { setTokensCookiesHelper } from '@/entities/auth/lib/helpers/setTokensCookiesHelper';
import { $axios } from '@/shared/api';

const $authAxios = $axios;

$authAxios.interceptors.response.use(res => {
  const parsedTokens = parseTokensCookieHelper(res);
  if (parsedTokens) {
    setTokensCookiesHelper(parsedTokens.refreshToken, parsedTokens.accessToken);
    return res;
  } else {
    throw new Error('Cookies dont have tokens!');
  }
});

export { $authAxios };
