'use client';

import { useFormState } from 'react-dom';
import { loginAction } from '@/actions/auth-action';
import { useEffect } from 'react';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const initialState = {
  success: false,
  message: '',
};

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(loginAction, initialState);

  useEffect(() => {
    if (state.success) {
      router.push('/leave-applications');
    }
  }, [state.success, router]);

  return (
    <>
      <h1 className="text-[56px] font-semibold text-[#253D90] mb-2">Login</h1>
      <p className="text-[30px] text-[#969696] my-6">Login to your account.</p>

      <form action={formAction} className="flex flex-col gap-6">
        <Input
          name="email"
          label="E-mail Address"
          type="email"
          required
          labelClassName="block text-xl font-bold mb-3 text-[#253D90]"
          inputClassName="rounded-md px-4 py-2 text-[#253D90] shadow focus:outline-none focus:ring-2 focus:ring-[#0A50C2]/30"
        />

        <Input
          name="password"
          label="Password"
          type="password"
          required
          labelClassName="block text-xl font-bold mb-3 text-[#253D90]"
          inputClassName="rounded-md px-4 py-2 text-[#253D90] shadow focus:outline-none focus:ring-2 focus:ring-[#0A50C2]/30"
        />

        <div className="flex justify-between pt-4">
          <Checkbox label="Remember me" id="" />
          <Link
            href="/reset-password"
            className="text-[#253D90] font-bold text-xl"
          >
            Reset Password?
          </Link>
        </div>

        {state.message && (
          <div className="text-red-600 text-center text-lg font-semibold">
            {state.message}
          </div>
        )}

        <Button type="submit" customClass="justify-center">
          Sign In
        </Button>

        <p className="text-center text-xl text-[#8F8F8F] mt-8">
          Don’t have an account yet?{' '}
          <Link href="/register" className="text-[#253D90] font-bold">
            Join KRIS today.
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
