import { parse } from 'cookie';

export function parseTokensCookieHelper(res: Response) {
  const cookies = res.headers.getSetCookie();
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
