import { Suspense } from 'react';
import ActivateForm from './activateForm';

export default function ActivatePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <ActivateForm />
    </Suspense>
  );
}
