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
    <header className="relative bg-white shadow-sm px-6 pt-6 flex items-center justify-center">
      {/* Left: Menu */}
      <div className="flex gap-12">
        <TopBarNav />
      </div>

      {/* Right: Icons */}
      <div className="absolute right-[80px] bottom-[5px] flex gap-4 items-center">
        {/* Bell */}
        <div className="relative">
          <div className="w-9 h-9 bg-[#253D90] rounded-full flex items-center justify-center">
            <BellIcon className="w-7 h-7 text-white " />
          </div>
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Mail */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full  bg-green-700 flex items-center justify-center">
            <EnvelopeIcon className="w-6 h-6 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        {/* Profile Dropdown  */}
        <ProfileDropdown onClick={handleLogout} />
      </div>
    </header>
  );
};

export default TopBar;
