'use server';

import { $authAxios } from '@/entities/auth';
import { redirect } from 'next/navigation';

export async function registrationAction(currentState: any, formData: FormData) {
  let redirectPath: string | null = null;
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');
    const username = formData.get('username');

    if (email && password && confirmPassword && username) {
      if (password !== confirmPassword) {
        throw new Error('Passwords are not same');
      }
      await $authAxios.post('/registration', {
        email,
        password,
        username,
      });
      redirectPath = '/';
      return { isAuth: true, message: 'You successfully registred' };
    } else {
      if (!email) {
        return { isAuth: false, message: 'Input an email!' };
      } else if (!password) {
        return { isAuth: false, message: 'Input a password' };
      } else {
        return { isAuth: false, message: 'Input an username' };
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
