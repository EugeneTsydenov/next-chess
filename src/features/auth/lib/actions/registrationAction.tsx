'use server';

import { RegistrationInputType } from '@/features/auth/model/schemas/registrationFormSchema';
import { $axios } from '@/shared/api';

export async function registrationAction(data: Omit<RegistrationInputType, 'confirmedPassword'>) {
  try {
    const response = await $axios.post('/registration', data);
    return { status: response.status, message: response.data.message };
  } catch (error: any) {
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message };
    } else {
      return { status: 500, message: 'An error occurred while executing the request' };
    }
  }
}
