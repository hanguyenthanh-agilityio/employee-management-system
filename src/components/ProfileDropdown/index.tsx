'use client';

import { useState, useRef, useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';

interface ProfileDropdownProps {
  onClick: () => void;
}

const ProfileDropdown = ({ onClick }: ProfileDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={handleClick}
        className="w-9 h-9 rounded-full bg-yellow flex items-center justify-center shadow-lg"
      >
        <UserCircleIcon className="w-6 h-6 text-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <Link
                href="/account"
                className="flex items-center block px-4 py-2 hover:bg-gray-100"
              >
                <UserIcon className="w-6 h-6 mr-2" />
                Account
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                onClick={onClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
