'use server';

import { LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import { cookies } from 'next/headers';
import { http } from '@/shared/api';
import { parse } from 'cookie';

export async function loginAction(data: LoginInputType) {
  const response = await http.post('login', data);
  const responseCookies = response.headers.getSetCookie();
  if (responseCookies[0]) {
    const parsedRefreshToken = parse(responseCookies[0]);
    cookies().set('refreshToken', parsedRefreshToken.refreshToken, {
      httpOnly: true,
      maxAge: Number(parsedRefreshToken['Max-Age']),
    });
  }
  return await response.json();
}
