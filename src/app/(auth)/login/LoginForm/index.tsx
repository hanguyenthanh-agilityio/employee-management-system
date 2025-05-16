'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Zod
import { ZodError } from 'zod';

// Actions
import { loginAction } from '@/actions/auth-action';

// Components
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import { Button } from '@/components/Button';

// Utils
import { loginSchema } from '@/utils/schemas/authSchema';
import { loginForm } from '@/utils/validate';

const initialState = {
  success: false,
  message: '',
  fieldErrors: {
    email: '',
    password: '',
  },
};

// State type definition
type State = typeof initialState;

// form logic
const validatedLoginAction = async (
  _: State,
  formData: FormData,
): Promise<State> => {
  const fields = loginForm(formData);

  try {
    loginSchema.parse(fields);

    const result = await loginAction(undefined, formData);

    return {
      success: result.success,
      message: result.message || '',
      fieldErrors: {
        email: '',
        password: '',
      },
    };
  } catch (err) {
    if (err instanceof ZodError) {
      const fieldErrors = err.flatten().fieldErrors;

      return {
        success: false,
        message: 'Please fix the errors below.',
        fieldErrors: {
          email: fieldErrors.email?.[0] || '',
          password: fieldErrors.password?.[0] || '',
        },
      };
    }

    return {
      success: false,
      message: 'Unknown error occurred.',
      fieldErrors: {
        email: '',
        password: '',
      },
    };
  }
};

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    validatedLoginAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push('/leave-applications');
    }
  }, [state.success, router]);

  return (
    <>
      <h1 className="text-6xl md:text-7xl font-semibold text-primary mb-2">
        Login
      </h1>
      <p className="text-xl md:text-3xl text-muted my-6">
        Login to your account
      </p>

      <form action={formAction} className="flex flex-col gap-6">
        <div>
          <Input
            name="email"
            label="E-mail Address"
            type="email"
            placeholder="Enter your email"
            labelClassName="block text-lg md:text-xl font-bold mb-3 text-primary"
            inputClassName={`w-full rounded-md px-4 py-2 text-primary shadow focus:outline-none focus:ring-2 ${
              state.fieldErrors.email
                ? 'border border-red focus:ring-red'
                : 'focus:ring-secondary/30'
            }`}
          />
          {state.fieldErrors.email && (
            <p className="text-red-600 text-sm mt-1">
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            labelClassName="block text-lg md:text-xl font-bold mb-3 text-primary"
            inputClassName={`w-full rounded-md px-4 py-2 text-primary shadow focus:outline-none focus:ring-2 ${
              state.fieldErrors.password
                ? 'border border-red focus:ring-red'
                : 'focus:ring-secondary/30'
            }`}
          />
          {state.fieldErrors.password && (
            <p className="text-red text-sm mt-1">
              {state.fieldErrors.password}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center text-sm">
          <Checkbox label="Remember me" id="remember" />
          <Link
            href="/reset-password"
            className="text-primary font-bold hover:underline"
          >
            Reset Password?
          </Link>
        </div>

        {state.message && (
          <div className="text-red-600 text-center text-lg font-medium">
            {state.message}
          </div>
        )}

        <Button
          type="submit"
          customClass="justify-center w-full"
          disabled={isPending}
        >
          {isPending ? 'Signing In...' : 'Sign In'}
        </Button>

        <p className="text-center text-lg md:text-xl text-Gray56 mt-6">
          Don’t have an account yet?{' '}
          <Link
            href="/register"
            className="text-primary font-bold hover:underline"
          >
            Join KRIS today
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
