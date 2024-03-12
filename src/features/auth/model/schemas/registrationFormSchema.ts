//Zod schema for registration form

import { z } from 'zod';

export const RegistrationFormSchema = z
  .object({
    username: z
      .string()
      .min(4, 'Username must be at least 4 characters!')
      .max(13, 'Username must be less then 13 characters!')
      .regex(new RegExp(/^[\p{L}\d]+$/u), 'Username must consist of letters and numbers only!'),
    email: z.string().email('Please, Enter a valid email address!'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters!')
      .max(20, 'Password must be less then 20 characters!')
      .regex(
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/),
        'The password must consist of at least one lowercase and uppercase letter, one number and one symbol',
      ),
    confirmedPassword: z.string({ required_error: 'Please, confirm password!' }),
  })
  .refine(data => data.password === data.confirmedPassword, {
    message: "Password and confirm password doesn't match!",
    path: ['confirmedPassword'],
  });

export type RegistrationInputType = z.infer<typeof RegistrationFormSchema>;
