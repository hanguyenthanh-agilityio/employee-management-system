import Card from '@/components/Common/Card';
import Table from '@/components/Common/Table';
import { payRows } from '@/constants/table';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';

const PaySlipSection = () => (
  <Card className="py-8 px-4">
    <div className="flex justify-between items-start pb-4">
      <h2 className="font-bold text-cyanBlue text-3xl pl-4">
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
