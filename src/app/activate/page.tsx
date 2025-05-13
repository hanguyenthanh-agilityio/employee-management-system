import { Suspense } from 'react';
import ActivateSection from './activateSection';

const ActivatePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <ActivateSection />
      </Suspense>
    </div>
  );
};

export default ActivatePage;
