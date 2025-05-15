'use client';

import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import BirthdayItem from '../BirthdayItem';
import Card from '@/components/Card';

const birthdays = [
  { name: 'biruk kidan', date: 'April 25th' },
  { name: 'biruk kidan', date: 'April 25th' },
  { name: 'biruk kidan', date: 'April 25th' },
  { name: 'biruk kidan', date: 'April 25th' },
  { name: 'biruk kidan', date: 'April 25th' },
];

const BirthdaySection = () => (
  <Card className="py-8 px-4">
    <div className="flex justify-between items-start">
      <h2 className="font-bold text-cyanBlue text-3xl pl-4">Birthdays</h2>
      <EllipsisVerticalIcon className="text-[#000] w-7 h-7" />
    </div>
    <div className="flex flex-col gap-4 py-10">
      {birthdays.map((item, index) => (
        <BirthdayItem
          key={index}
          name={item.name}
          date={item.date}
          onClick={() => alert(`Wished ${item.name}!`)}
        />
      ))}
    </div>
  </Card>
);

export default BirthdaySection;
