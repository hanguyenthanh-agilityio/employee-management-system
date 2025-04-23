import TopBar from '@/components/TopBar';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#E6EEF9] min-h-screen">
      <TopBar />
      <main className="max-w-7xl mx-auto p-4 space-y-6">{children}</main>
    </div>
  );
};
export default DashboardLayout;
