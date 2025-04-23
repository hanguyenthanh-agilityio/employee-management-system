'use client';

import LeaveCard from '../LeaveApplicationCard';
import { useRouter } from 'next/navigation';

const leaves = [
  { title: 'Annual Leave', days: 60 },
  { title: 'Sick Leave', days: 20 },
  { title: 'Maternity Leave', days: 60 },
  { title: 'Compassionate Leave', days: 30 },
];

const LeaveApplicationSection = () => {
  const router = useRouter();
  const format = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

  const handleClick = (title: string) => {
    const path = `/dashboard/apply-for-leave/${format(title)}`;
    router.push(path);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex flex-wrap gap-4 justify-start w-max mb-3">
        {leaves.map((leave, index) => (
          <LeaveCard
            key={index}
            title={leave.title}
            days={leave.days}
            onClick={() => {
              handleClick(leave.title);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaveApplicationSection;
