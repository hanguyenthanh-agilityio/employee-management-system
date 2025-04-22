'use client';

import GenericTable from '../LeaveHistoryTable';

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
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded text-sm shadow">
          Actions
        </button>
      ),
      className: 'text-right',
    },
  ];

  return <GenericTable data={data} columns={columns} />;
};

export default LeaveHistorySection;
