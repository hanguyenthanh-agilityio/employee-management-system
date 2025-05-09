import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6).max(100, {
    message: 'Password must be between 6 and 100 characters',
  }),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(3),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phone: z.string().min(6),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    role: z.enum(['admin', 'user']),
    isReceiveNewsletters: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterInput = z.infer<typeof registerSchema>;
