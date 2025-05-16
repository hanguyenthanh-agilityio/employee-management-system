'use client';

import TopBarNav from '../TopBarNav';
import ProfileDropdown from '../ProfileDropdown';
import { BellIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { startTransition } from 'react';
import { logoutAction } from '@/actions/auth-action';
import { useRouter } from 'next/navigation';

const TopBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
      router.replace('/login');
    });
  };

  return (
    <header className="relative flex-grow container mx-auto bg-white shadow-sm px-4 py-4 flex justify-center items-center flex-wrap gap-20 gap-y-4 md:px-6 md:py-6">
      {/* Left: Menu */}
      <TopBarNav />

      {/* Right: Icons */}
      <div className="absolute right-10 flex gap-4 items-center">
        {/* Bell */}
        <div className="relative">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <BellIcon className="w-6 h-6 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 text-xs bg-red text-white w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Mail */}
        <div className="relative">
          <div className="w-9 h-9 bg-green-700 rounded-full flex items-center justify-center shadow-lg">
            <EnvelopeIcon className="w-5 h-5 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 text-xs bg-red text-white w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        {/* Profile Dropdown */}
        <ProfileDropdown onClick={handleLogout} />
      </div>
    </header>
  );
};

export default TopBar;
