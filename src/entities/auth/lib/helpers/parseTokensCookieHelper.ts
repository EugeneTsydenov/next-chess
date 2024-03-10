import { AxiosResponse } from 'axios';
import { parse } from 'cookie';

export function parseTokensCookieHelper(res: AxiosResponse) {
  const cookies = res.headers['set-cookie'];
  if (cookies) {
    const parsedRefreshTokenCookies = parse(cookies[0]);
    const parsedAccessTokenCookies = parse(cookies[1]);
    return {
      refreshToken: parsedRefreshTokenCookies.refreshToken,
      accessToken: parsedAccessTokenCookies.accessToken,
    };
  } else {
    return null;
  }
}
