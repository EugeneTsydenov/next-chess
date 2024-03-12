import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please, Enter an email address!')
    .email('Please, Enter a valid email address!'),
  password: z.string().min(1, 'Please, Enter a password!'),
});

export type LoginInputType = z.infer<typeof LoginFormSchema>;
