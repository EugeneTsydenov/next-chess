import { z } from 'zod';

export const registrationResponseSchema = z.object({
  message: z.string(),
});
