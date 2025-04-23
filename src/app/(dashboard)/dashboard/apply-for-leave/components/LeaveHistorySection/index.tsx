'use client';

import { ArrowDownCircleIcon, FunnelIcon } from '@heroicons/react/16/solid';
import GenericTable from '../LeaveHistoryTable';
import { Button } from '@/components/Button';

export interface LeaveData {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

const LeaveHistorySection = ({ data }: { data: LeaveData[] }) => {
  const columns = [
    {
      title: 'Name(s)',
      render: (row: LeaveData) => row.name,
    },
    {
      title: 'Duration(s)',
      render: (row: LeaveData) => row.duration,
    },
    {
      title: 'Start Date',
      render: (row: LeaveData) => row.startDate,
    },
    {
      title: 'End Date',
      render: (row: LeaveData) => row.endDate,
    },
    {
      title: 'Type',
      render: (row: LeaveData) => row.type,
    },
    {
      title: 'Reason(s)',
      render: (row: LeaveData) => row.reason,
    },
    {
      title: 'Actions',
      render: () => (
        <button className="flex items-center justify-center gap-5 bg-[#253D90] hover:bg-blue-800 text-white font-bold px-10 py-2 rounded text-xl shadow">
          Actions
          <ArrowDownCircleIcon width={19} height={19} />
        </button>
      ),
      className: 'flex justify-center',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h3 className="text-[25px] text-[#000] font-bold">Leave History</h3>
        <div className="flex items-center py-6 gap-10">
          <FunnelIcon width={31} height={31} className="text-[#000]" />
          <Button
            variant="export"
            customClass="flex gap-8 text-lg rounded-[14px] py-3 px-11 shadow-[11px_4px_14px_0px_#0000001F]"
          >
            Export
            <ArrowDownCircleIcon width={19} height={19} />
          </Button>
        </div>
      </div>
      <GenericTable data={data} columns={columns} />
    </div>
  );
};

export default LeaveHistorySection;
