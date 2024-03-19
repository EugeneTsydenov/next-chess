import { cookies } from 'next/headers';
import { api } from '@/shared/api';
import { Link } from '@/shared/ui';
import * as React from 'react';

const getData = async () => {
  const accessToken = cookies().get('accessToken')?.value;
  const refreshToken = cookies().get('refreshToken')?.value;
  if (accessToken) {
    const res = await api.get('user', {
      headers: { Cookie: `refreshToken=${refreshToken}`, Authorization: `Bearer ${accessToken}` },
    });
    const resData = await res.json();
    console.log(resData);
    return resData;
  }
};

async function AuthDisplay() {
  const user = await getData();

  if (!user.username) {
    return <Link href='/login'> Login</Link>;
  }

  return <main>{user.username}</main>;
}
export default AuthDisplay;
