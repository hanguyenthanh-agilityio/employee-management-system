import TopBar from '@/components/TopBar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
    <div className="bg-[#E6EEF9] min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow container mx-auto px-4 sm:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
