import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(256, 'Name must be at most 256 characters'),
  email: z.email({ message: 'Please enter a valid email address' }),
  description: z
    .string()
    .min(10, 'The project description must be at least 10 characters')
    .max(1000, 'The project description must be at most 1000 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  captcha: z.string().optional(),
})
