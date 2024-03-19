'use server';

import { parseTokensCookieHelper } from '@/entities/auth/lib/helpers/parseTokensCookieHelper';
import { setTokensCookiesHelper } from '@/entities/auth/lib/helpers/setTokensCookiesHelper';
import { LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import { api } from '@/shared/api';

export async function loginAction(data: LoginInputType) {
  try {
    const response = await api.post('login', data);
    const resData = await response.json();
    const parsedTokens = parseTokensCookieHelper(response);
    if (parsedTokens) {
      setTokensCookiesHelper(parsedTokens.refreshToken, parsedTokens.accessToken);
      return { status: response.status, message: resData.message };
    }
  } catch (e: any) {
    if (e.response) {
      return { status: e.response.status, message: e.response.data.message };
    } else {
      return { status: 500, message: 'An error occurred while executing the request' };
    }
  }
}
