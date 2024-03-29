'use server';

import { registrationResponseSchema } from '@/features/auth/model/schemas/registrationResponseSchema';
import { RegistrationInputType } from '@/features/auth/model/schemas/registrationFormSchema';
import { http } from '@/shared/api';

export async function registrationAction(data: Omit<RegistrationInputType, 'confirmedPassword'>) {
  try {
    const response = await http.post('/registration', data);
    const resData = await response.json();
    const validatedResData = registrationResponseSchema.parse(resData);
    return { statusText: response.statusText, message: validatedResData.message };
  } catch (error: any) {
    return { statusText: 'RequestError', message: 'An error occurred while executing the request' };
  }
}
