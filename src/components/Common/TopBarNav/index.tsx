'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants
import { ROUTER } from '@/constants/router';

const listItem = [
  { name: 'Dashboard', href: ROUTER.DASHBOARD },
  { name: 'Requests', href: ROUTER.REQUESTS },
  { name: 'Payroll', href: ROUTER.PAYROLL },
  { name: 'Company', href: ROUTER.COMPANY },
  { name: 'Extras', href: ROUTER.EXTRAS },
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
                ? 'text-primary border-b-2 border-yellow-400 pb-3'
                : 'text-gray-600 hover:text-primary',
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
