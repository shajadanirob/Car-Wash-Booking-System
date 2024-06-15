import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    password: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['admin', 'user']),
  }),
});
