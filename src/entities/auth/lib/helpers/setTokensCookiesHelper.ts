import { cookies } from 'next/headers';

export function setTokensCookiesHelper(refreshToken: string, accessToken: string) {
  cookies().set('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 15,
  });
}
