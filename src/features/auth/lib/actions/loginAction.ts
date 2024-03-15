'use server';

import { LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import { $authAxios } from '@/entities/auth';

export async function loginAction(data: LoginInputType) {
  try {
    const response = await $authAxios.post('/login', data);
    return { status: response.status, message: response.data.message };
  } catch (e: any) {
    if (e.response) {
      return { status: e.response.status, message: e.response.data.message };
    } else {
      return { status: 500, message: 'An error occurred while executing the request' };
    }
  }
}
