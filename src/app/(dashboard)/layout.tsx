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
    <div className="bg-[#E6EEF9] min-h-screen">
      <TopBar />
      <main className="mx-auto px-20 py-10 space-y-6">{children}</main>
    </div>
  );
};
export default DashboardLayout;
