'use server';

import { loginAPI } from '@/api/auth';
import { loginSchema } from '@/utils/schemas/loginSchema';
import { cookies } from 'next/headers';
import axios from 'axios';

export const loginAction = async (_: unknown, formData: FormData) => {
  const fields = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const parsed = loginSchema.safeParse(fields);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const data = await loginAPI(parsed.data);

    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      path: '/',
    });

    axios.defaults.headers['Authorization'] = `Bearer ${data.token}`;

    console.log('Login successful, token set:', data.token);

    return { success: true };
  } catch (err) {
    return {
      success: false,
      message: 'Invalid credentials or server error',
    };
  }
};
