'use client';

import { activateAction } from '@/actions/auth-action';
import { Button } from '@/components/Button';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect } from 'react';

const initialState = {
  success: false,
  message: '',
};

const ActivatePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid') || '';
  const token = searchParams.get('token') || '';

  const [state, formAction] = useActionState(activateAction, initialState);

  useEffect(() => {
    if (state.success) {
      setTimeout(() => router.push('/login'), 3000);
    }
  }, [state.success, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        action={formAction}
        className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4">
          <CheckCircleIcon className="w-12 h-12" />
          <h1 className="text-2xl font-bold">Activate your account</h1>
        </div>
        <p className="text-xl mt-8">Click the button below to confirm</p>

        <input type="hidden" name="uid" value={uid} />
        <input type="hidden" name="token" value={token} />

        <Button
          type="submit"
          customClass="flex justify-center items-center w-[150px] h-[54px] text-xl mt-4 py-3 rounded-xl"
        >
          ACTIVATE
        </Button>

        {state.message && (
          <p
            className={`mt-4 text-lg ${state.success ? 'text-green-600' : 'text-red-500'}`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ActivatePage;
