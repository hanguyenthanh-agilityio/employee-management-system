import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';

const leaveData = [
  { label: 'Annual Leave', current: 10, total: 60 },
  { label: 'Sick Leave', current: 0, total: 10 },
  { label: 'Compassionate Leave', current: 8, total: 15 },
];

const LeaveSection = () => (
  <Card className="p-8">
    <div className="flex justify-between items-start">
      <h2 className="font-bold text-[#545559] text-3xl">
        Available Leave Days
      </h2>
      <EllipsisVerticalIcon className="text-[#000] w-7 h-7" />
    </div>
    <div className="flex flex-col gap-6 py-10">
      {leaveData.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          current={item.current}
          total={item.total}
        />
      ))}
    </div>
  </Card>
);

export default LeaveSection;
