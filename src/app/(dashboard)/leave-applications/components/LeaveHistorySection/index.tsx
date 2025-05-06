'use client';

import { ArrowDownCircleIcon } from '@heroicons/react/16/solid';
import GenericTable from '../LeaveHistoryTable';
import { Button } from '@/components/Button';
import { LeaveItem } from '@/types/components';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Select from '@/components/Select';

const LeaveHistorySection = ({ data }: { data: LeaveItem[] }) => {
  /**
   * searchParams: get query from URL
   * router: use to change URL
   * pathname: Get current path
   */
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedType = searchParams.get('type') || 'All';

  /**
   * Render data when filter by type
   * memo: avoid re-calculating every render
   */
  const filteredData = useMemo(() => {
    if (selectedType === 'All') return data;
    return data.filter((item) => item.type === selectedType);
  }, [data, selectedType]);

  /**
   * Generate a list of leave type form data
   * memo: avoid re-calculating the leave types list
   * set: remove duplicate value
   */
  const leaveTypes = useMemo(() => {
    const uniqueTypes = Array.from(new Set(data.map((item) => item.type)));
    return ['All', ...uniqueTypes];
  }, [data]);

  /**
   * Handle when select new filter
   */
  const handleChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type === 'All') {
      params.delete('type');
    } else {
      params.set('type', type);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleFilterChange = (e: { target: { value: string } }) =>
    handleChange(e.target.value);

  const columns = [
    {
      title: 'Name(s)',
      render: (row: LeaveItem) => row.employeeName,
    },
    {
      title: 'Duration(s)',
      render: (row: LeaveItem) => row.durations,
    },
    {
      title: 'Start Date',
      render: (row: LeaveItem) => row.startDate,
    },
    {
      title: 'End Date',
      render: (row: LeaveItem) => row.endDate,
    },
    {
      title: 'Type',
      render: (row: LeaveItem) => row.type,
    },
    {
      title: 'Reason(s)',
      render: (row: LeaveItem) => row.reason,
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
          <Select
            label="Filter by Type:"
            name="type"
            value={selectedType}
            onChange={handleFilterChange}
            className="flex items-center justify-center text-lg"
            options={leaveTypes.map((type) => ({
              value: type,
              label: type,
            }))}
          />

          <Button
            variant="export"
            customClass="flex gap-8 text-lg rounded-[14px] py-3 px-11 shadow-[11px_4px_14px_0px_#0000001F]"
          >
            Export
            <ArrowDownCircleIcon width={19} height={19} />
          </Button>
        </div>
      </div>
      <GenericTable data={filteredData} columns={columns} />
    </div>
  );
};

export default LeaveHistorySection;
