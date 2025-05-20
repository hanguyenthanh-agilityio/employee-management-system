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
    <div className="w-full px-0 overflow-x-auto">
      <div className="flex gap-4 w-max sm:w-full">
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
