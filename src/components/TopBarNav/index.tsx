'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const listItem = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Requests', href: '/requests' },
  { name: 'Payroll', href: '/payroll' },
  { name: 'Company', href: '/company' },
  { name: 'Extras', href: '/extras' },
];

const TopBarNav = () => {
  const pathname = usePathname();

  return (
    <>
      {listItem.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'text-xl font-medium transition-colors duration-200',
              isActive
                ? 'text-[#253D90] border-b-2 border-yellow-400 pb-3'
                : 'text-gray-600 hover:text-[#253D90]',
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
};

export default TopBarNav;
