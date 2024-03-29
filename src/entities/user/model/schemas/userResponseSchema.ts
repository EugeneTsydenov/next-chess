import { z } from 'zod';

export const userResponseSchema = z.object({
  email: z.string(),
  username: z.string(),
  avatar: z.string(),
  createdAt: z.string(),
});
