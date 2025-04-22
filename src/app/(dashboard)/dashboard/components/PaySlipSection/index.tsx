import Card from '@/components/Card';
import Table from '@/components/Table';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';

const payRows = [
  ['Basic Wage', '150,000', '-30,000', '120,000'],
  ['Tax', '15,000', '-3,000', '12,000'],
  ['Pension', '15,000', '-3,000', '12,000'],
  ['Total Earnings', '150,000', '-36,000', '114,000'],
];

const PaySlipSection = () => (
  <Card className="py-8 px-4">
    <div className="flex justify-between items-start pb-4">
      <h2 className="font-bold text-[#545559] text-3xl pl-4">
        April Pay slip breakdown
      </h2>
      <EllipsisVerticalIcon className="text-[#000] w-7 h-7" />
    </div>
    <Table
      headers={['Earnings', 'Amount', 'Deductions', 'Total']}
      rows={payRows}
    />
  </Card>
);

export default PaySlipSection;
