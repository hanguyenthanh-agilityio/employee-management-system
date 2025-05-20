import TopBar from '@/components/Common/TopBar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#E6EEF9]">
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
