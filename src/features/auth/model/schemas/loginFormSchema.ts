import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: 'Please, Enter an email address!' })
    .email('Please, Enter a valid email address!'),
  username: z.string({
    required_error: 'Please, Enter a password!',
  }),
});

export type LoginInputType = z.infer<typeof LoginFormSchema>;
