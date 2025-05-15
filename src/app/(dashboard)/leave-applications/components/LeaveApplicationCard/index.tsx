import { Button } from '@/components/Button';

interface LeaveCardProps {
  title: string;
  days: number;
  onClick?: () => void;
}

const LeaveCard = ({ title, days, onClick }: LeaveCardProps) => {
  return (
    <div
      className={`w-auto bg-blue-900 text-white rounded-xl p-5 w-52 flex items-center justify-between gap-3 shadow transition hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <div className="bg-white text-primary text-[70px] w-[135px] h-[135px] rounded-full flex items-center justify-center">
        {days}
      </div>
      <div className="flex flex-col justify-center pl-10">
        <div className="text-center font-medium text-2xl pb-2 w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </div>
        <Button
          variant="secondary"
          customClass="text-xl font-bold justify-center px-16 py-1.5 rounded-full"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default LeaveCard;
