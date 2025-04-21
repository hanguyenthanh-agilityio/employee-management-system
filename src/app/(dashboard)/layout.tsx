import TopBar from '@/components/TopBar';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#E6EEF9] min-h-screen">
      <TopBar />
      <main className="mx-auto px-20 py-10 space-y-6">{children}</main>
    </div>
  );
};
export default DashboardLayout;
