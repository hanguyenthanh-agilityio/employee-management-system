'use client';

import { useRouter } from 'next/navigation';

// Constants
import { ENDPOINT_LEAVE } from '@/constants/api-endpoint';

// Utils
import { formatTitleToPath } from '@/utils/format';

// Components
import LeaveCard from '../LeaveApplicationCard';

const leaves = [
  { title: 'Annual Leave', days: 60 },
  { title: 'Sick Leave', days: 20 },
  { title: 'Maternity Leave', days: 60 },
  { title: 'Compassionate Leave', days: 30 },
];

const LeaveApplicationSection = () => {
  const router = useRouter();

  const handleClick = (title: string): (() => void) => {
    return () => {
      const path = `${ENDPOINT_LEAVE}/create?type=${formatTitleToPath(title)}`;
      router.push(path);
    };
  };

  return (
    <div className="w-full px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {leaves.map((leave, index) => (
          <LeaveCard
            key={index}
            title={leave.title}
            days={leave.days}
            onClick={handleClick(leave.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaveApplicationSection;
