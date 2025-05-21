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
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(1, 'Phone is required'),
    password: z.string().min(6, 'Password must be 6+ chars'),
    confirmPassword: z.string(),
    newsletter: z.boolean().refine((val) => val === true, {
      message: 'You must agree to receive newsletter',
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must agree to terms and privacy',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
