'use server';

import { loginAPI } from '@/api/auth';
import { loginSchema } from '@/utils/schemas/loginSchema';
import axios from 'axios';
import { cookies } from 'next/headers';

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

    if (!data.access) {
      return {
        success: false,
        message: data.message || 'Invalid credentials',
      };
    }

    const cookieStore = await cookies();
    cookieStore.set('token', data.access, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log('Token in cookie:', (await cookies()).get('token')?.value);

    return { success: true };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err) {
    console.error('Login error:', err);

    if (axios.isAxiosError(err)) {
      console.error('Axios error response:', err.response?.data);
    }

    return {
      success: false,
      message: 'Invalid credentials or server error',
    };
  }
};
