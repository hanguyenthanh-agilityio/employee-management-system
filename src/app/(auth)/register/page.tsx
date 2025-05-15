'use client';

import { registerAction } from '@/actions/auth-action';
import { Button } from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

const inputFields = [
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
  { label: 'E-mail Address', type: 'email', name: 'email' },
  { label: 'Phone Number', name: 'phone' },
  { label: 'Password', type: 'password', name: 'password' },
  { label: 'Confirm Password', type: 'password', name: 'confirmPassword' },
];

const checkboxes = [
  { id: 'newsletter', label: 'Yes, I want to receive KRIS newsletters' },
  {
    id: 'terms',
    label: 'I agree to all the ',
    subLabel: 'Terms, Privacy Policy',
  },
];

const RegisterPage = () => {
  const router = useRouter();

  const initialState = {
    success: false,
    message: '',
  };
  const [state, formAction] = useActionState(registerAction, initialState);

  useEffect(() => {
    if (state.success) {
      router.push('/login/');
    }
  }, [state.success, router]);

  return (
    <>
      <h1 className="text-4xl sm:text-[56px] font-semibold text-[#253D90] mb-2 leading-[normal]">
        Welcome to XCELTECH
      </h1>
      <p className="text-xl sm:text-[30px] text-[#969696] my-4 sm:my-6">
        Register your account
      </p>

      <form
        action={formAction}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {inputFields.map((field, index) => (
          <Input
            key={index}
            label={field.label}
            name={field.name}
            type={field.type}
            labelClassName="block text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#253D90]"
            inputClassName="rounded-md px-4 py-2 text-[#253D90] shadow-[5px_2px_10px_3px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#0A50C2]/30"
          />
        ))}

        <div className="col-span-1 md:col-span-2 space-y-2 pt-4">
          {checkboxes.map((cb) => (
            <Checkbox
              key={cb.id}
              name={cb.id}
              id={cb.id}
              label={cb.label}
              subLabel={cb.subLabel}
            />
          ))}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Button
            type="submit"
            customClass="w-full sm:max-w-[300px] justify-center py-2 md:py-3 text-lg sm:text-xl my-2"
          >
            Create Account
          </Button>
        </div>
      </form>

      <p className="text-lg sm:text-xl text-[#8F8F8F] mt-6 sm:mt-8">
        Already have an account?{' '}
        <Link href="/login" className="text-[#253D90] font-bold">
          Log In
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
