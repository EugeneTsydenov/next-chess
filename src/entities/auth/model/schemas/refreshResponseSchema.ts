import { z } from 'zod';

export const refreshResponseSchema = z.object({
  jwt: z.string(),
});
