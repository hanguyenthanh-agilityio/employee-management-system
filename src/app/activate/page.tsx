import { Suspense } from 'react';
import ActivateForm from './activateForm';

export default function ActivatePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <ActivateForm />
      </Suspense>
    </div>
  );
}
