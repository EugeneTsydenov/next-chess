import { z } from 'zod';

export const refreshResponseSchema = z.object({
  jwt: z.string(),
});

export type refreshResponseType = z.infer<typeof refreshResponseSchema>;
