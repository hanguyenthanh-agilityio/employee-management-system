'use server';

import { cookies } from 'next/headers';

// Services
import { activateAccount, login, register } from '@/services/apiService';

// Utils
import { loginSchema, registerSchema } from '@/utils/schemas/authSchema';
import { loginForm, registerForm } from '@/utils/validate';

/**
 * LOGIN ACTION
 * Get data from FormData
 * Validate by Zod. safeParse: return object
 * Call API /account/login/
 * Save access token in Cookie
 */
export const loginAction = async (_: unknown, formData: FormData) => {
  const fields = loginForm(formData);

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
      // Secure - not readable by java
      httpOnly: true,
      // Works only over HTTPS
      secure: true,
      // Applies to entire site
      path: '/',
      // Lasts for 12 hours
      maxAge: 60 * 60 * 12,
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

// Logout action
export const logoutAction = async () => {
  const cookieStore = await cookies();

  cookieStore.set('token', '', {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 0,
  });

  return { success: true };
};

// Register action
export const registerAction = async (_: unknown, formData: FormData) => {
  console.log('Form values:', Object.fromEntries(formData.entries()));

  const fields = registerForm(formData);

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

// Activate Account
export const activateAction = async (data: { uid: string; token: string }) => {
  return await activateAccount(data.uid, data.token);
};
