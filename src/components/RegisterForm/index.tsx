'use client';

import { useActionState, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Zod
import { ZodError } from 'zod';

// Actions
import { registerAction } from '@/actions/auth-action';

// Utils
import { registerSchema } from '@/utils/schemas/authSchema';
import { registerForm } from '@/utils/validate';

// Components
import { Button } from '@/components/Button';
import Checkbox from '@/components/Common/Checkbox';
import Input from '@/components/Common/Input';

// Constants
import { ROUTER } from '@/constants/router';

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

const RegisterForm = () => {
  const router = useRouter();

  const initialState = {
    success: false,
    message: '',
    fieldErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  };

  type State = typeof initialState;

  const validatedRegisterAction = async (
    _: State,
    formData: FormData,
  ): Promise<State> => {
    const field = registerForm(formData);

    try {
      registerSchema.parse(field);

      const result = await registerAction(undefined, formData);

      return {
        success: result.success,
        message: result.message || '',
        fieldErrors: initialState.fieldErrors,
      };
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors = err.flatten().fieldErrors;

        return {
          success: false,
          message: 'Please fix the errors below.',
          fieldErrors: {
            firstName: fieldErrors.firstName?.[0] || '',
            lastName: fieldErrors.lastName?.[0] || '',
            email: fieldErrors.email?.[0] || '',
            phone: fieldErrors.phone?.[0] || '',
            password: fieldErrors.password?.[0] || '',
            confirmPassword: fieldErrors.confirmPassword?.[0] || '',
          },
        };
      }

      return {
        success: false,
        message: 'Unknown error occurred.',
        fieldErrors: initialState.fieldErrors,
      };
    }
  };

  const [state, formAction, isPending] = useActionState(
    validatedRegisterAction,
    initialState,
  );
  useEffect(() => {
    if (state.success) {
      router.push(ROUTER.LOGIN);
    }
  }, [state.success, router]);

  const [agreements, setAgreements] = useState({
    newsletter: false,
    terms: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      <form
        action={formAction}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {inputFields.map((field, index) => (
          <div key={index}>
            <Input
              label={field.label}
              name={field.name}
              type={field.type}
              labelClassName="block text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary"
              inputClassName={`rounded-md px-4 py-2 text-primary shadow focus:outline-none focus:ring-2 ${
                state.fieldErrors[field.name as keyof State['fieldErrors']]
                  ? 'border border-red focus:ring-red'
                  : 'focus:ring-secondary/30'
              }`}
            />
            {state.fieldErrors[field.name as keyof State['fieldErrors']] && (
              <p className="text-red text-sm mt-1">
                {state.fieldErrors[field.name as keyof State['fieldErrors']]}
              </p>
            )}
          </div>
        ))}

        <div className="col-span-1 md:col-span-2 space-y-2 pt-4">
          {checkboxes.map((cb) => (
            <Checkbox
              key={cb.id}
              name={cb.id}
              id={cb.id}
              label={cb.label}
              subLabel={cb.subLabel}
              checked={agreements[cb.id as keyof typeof agreements]}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Button
            type="submit"
            customClass="w-full sm:max-w-[300px] justify-center py-2 md:py-3 text-lg sm:text-xl my-2"
            disabled={isPending || !agreements.newsletter || !agreements.terms}
          >
            {isPending ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>

      <p className="text-lg sm:text-xl text-Gray56 mt-6 sm:mt-8">
        Already have an account?{' '}
        <Link href={ROUTER.LOGIN} className="text-primary font-bold">
          Log In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
