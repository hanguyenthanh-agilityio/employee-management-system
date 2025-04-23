'use client';

import LeaveCard from '../LeaveApplicationCard';

const leaves = [
  { title: 'Annual Leave', days: 60 },
  { title: 'Sick Leave', days: 20 },
  { title: 'Maternity Leave', days: 60 },
  { title: 'Compassionate Leave', days: 30 },
];

const LeaveApplicationSection = () => {
  const handleClick = () => {};

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex flex-wrap gap-4 justify-start w-max mb-3">
        {leaves.map((leave, index) => (
          <LeaveCard
            key={index}
            title={leave.title}
            days={leave.days}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaveApplicationSection;
