'use server';

import { cookies } from 'next/headers';
import { http } from '@/shared/api';

export async function logoutAction(jwt: string) {
  const refreshToken = cookies().get('refreshToken')?.value;
  const res = await http.post(
    'logout',
    {},
    {
      headers: { Authorization: `Bearer ${jwt}`, Cookie: `refreshToken=${refreshToken}` },
    },
  );

  if (res.statusText === 'OK') {
    cookies().delete('refreshToken');
    return res.statusText;
  }

  return res.statusText;
}
