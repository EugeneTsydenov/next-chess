'use server';

import { RegistrationInputType } from '@/features/auth/model/schemas/registrationFormSchema';

export async function registrationAction(data: Omit<RegistrationInputType, 'confirmedPassword'>) {
  console.log(data);
}
