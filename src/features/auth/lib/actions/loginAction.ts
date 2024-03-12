import { LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import { signIn } from 'next-auth/react';

export async function loginAction(data: LoginInputType) {
  const res = await signIn('credentials', {
    redirect: false,
    email: data.email,
    password: data.password,
  });
  console.log(res);
}
