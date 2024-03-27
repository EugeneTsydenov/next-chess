import { z } from 'zod';

export const loginSuccessResponseSchema = z.object({
  jwt: z.string(),
  data: z.object({
    message: z.string(),
  }),
});

export const loginErrorResponseSchema = z.object({
  message: z.string(),
});
