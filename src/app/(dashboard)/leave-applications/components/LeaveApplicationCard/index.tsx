import { Button } from '@/components/Button';

interface LeaveCardProps {
  title: string;
  days: number;
  onClick?: () => void;
}

const LeaveCard = ({ title, days, onClick }: LeaveCardProps) => {
  return (
    <div
      className="cursor-pointer transition hover:scale-[1.03] rounded-2xl p-5 bg-blue-900 text-white shadow-md flex flex-col items-center gap-4 h-full"
      onClick={onClick}
    >
      <div className="bg-white text-blue-900 text-5xl w-28 h-28 rounded-full flex items-center justify-center font-bold">
        {days}
      </div>
      <div className="text-center text-xl font-semibold truncate w-full px-2">
        {title}
      </div>
      <Button
        variant="secondary"
        customClass="text-base font-bold justify-center px-16 py-1.5 rounded-full"
      >
        Apply
      </Button>
    </div>
  );
};

export default LeaveCard;
