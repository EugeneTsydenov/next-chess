'use server';

import { $authAxios } from '@/entities/auth';
import { redirect } from 'next/navigation';
export async function loginAction(currentState: any, formData: FormData) {
  let redirectPath: string | null = null;
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      await $authAxios.post('/login', {
        email,
        password,
      });

      redirectPath = '/';

      return { isAuth: true, message: 'You successfully login' };
    } else {
      redirectPath = null;
      if (!email) {
        return { isAuth: false, message: 'Input an email' };
      } else {
        return { isAuth: false, message: 'Input an password' };
      }
    }
  } catch (e: any) {
    redirectPath = null;
    return { isAuth: false, message: e.message };
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}
