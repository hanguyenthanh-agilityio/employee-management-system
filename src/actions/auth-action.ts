'use server';

import { login, register } from '@/services/apiService';
import { loginSchema, registerSchema } from '@/utils/schemas/authSchema';
import { cookies } from 'next/headers';

// Login action
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
    const data = await login(parsed.data);

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

    return { success: true };
  } catch (err) {
    console.error('Login error:', err);

    return {
      success: false,
      message:
        err instanceof Error
          ? err.message
          : 'Invalid credentials or server error',
    };
  }
};

// Register action
export const registerAction = async (_: unknown, formData: FormData) => {
  const email = formData.get('email')?.toString();
  const username = email?.split('@')[0] || '';

  console.log('Form values:', Object.fromEntries(formData.entries()));

  const fields = {
    email,
    username,
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    role: 'admin',
    isReceiveNewsletters: formData.get('newsletter') === 'on',
  };

  const parsed = registerSchema.safeParse(fields);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const response = await register(parsed.data);

    return {
      success: true,
      message:
        response.message ||
        'Registration successful. Please check your email to activate your account.',
    };
  } catch (err: unknown) {
    console.error('Register error:', err);

    return {
      success: false,
      message:
        err instanceof Error
          ? err.message
          : 'Unknown error during registration',
    };
  }
};
