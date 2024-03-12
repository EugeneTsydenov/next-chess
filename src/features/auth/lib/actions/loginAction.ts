import { LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export async function loginAction(data: LoginInputType) {
  const res = await signIn('credentials', {
    redirect: false,
    email: data.email,
    password: data.password,
  });

  if (res) {
    if (res.error) {
      toast('Something Went Wrong!', {
        position: 'bottom-right',
        type: 'error',
        theme: 'dark',
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    if (res.ok) {
      toast(res.ok, {
        position: 'bottom-right',
        type: 'success',
        theme: 'dark',
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  } else {
    toast('Something Went Wrong!', {
      position: 'bottom-right',
      type: 'error',
      theme: 'dark',
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
