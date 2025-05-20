import { ReactNode } from 'react';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Components
import TopBar from '@/components/Common/TopBar';

// Constants
import { ROUTER } from '@/constants/router';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect(ROUTER.LOGIN);
  }

  return (
    <div className="min-h-screen flex flex-col bg-lavender">
      <TopBar />
      <main className="flex-grow">
        <div className="flex-grow container mx-auto px-4 sm:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
