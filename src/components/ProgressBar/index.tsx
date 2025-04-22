interface ProgressBarProps {
  label: string;
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({
  label,
  current,
  total,
  color = '#253D90',
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="flex justify-between items-center text-xl text-[#545559] mb-2">
        <span>{label}</span>
        <span>
          {current} of {total} day(s)
        </span>
      </div>
      <div className="w-full bg-[#E0E3EC] h-7 rounded">
        <div
          className="h-7 rounded"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
