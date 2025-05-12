'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

// Components
import GenericTable from '../LeaveHistoryTable';
import Select from '@/components/Select';

// Types
import { LeaveItem } from '@/types/components';

import {
  deleteLeaveApplication,
  exportLeaveApplications,
} from '@/api/leaveApplications';
import { triggerDownload } from '@/utils/download';
import ExportDropdown from '@/components/ExportDropdown';
import ActionsDropdown from '@/components/ActionDropdown';

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

  // Handle edit Leave Application
  const handleEdit = (id: string): (() => void) => {
    return () => {
      router.push(`/leave-applications/${id}/edit`);
    };
  };

  // Handle delete Leave Application
  const handleDelete = (id: string): (() => void) => {
    return async () => {
      try {
        await deleteLeaveApplication(id);

        router.refresh();
      } catch (error) {
        console.error('Delete failed', error);
      }
    };
  };

  const handleExport = async (format: 'pdf' | 'csv' | 'excel') => {
    try {
      const blob = await exportLeaveApplications(format);
      triggerDownload(blob, `leave_applications.${format}`);
    } catch (error) {
      console.error('Export failed', error);
    }
  };

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
      render: (row: LeaveItem) => (
        <ActionsDropdown
          onEdit={handleEdit(row.id)}
          onDelete={handleDelete(row.id)}
        />
      ),
      className: 'flex justify-center',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h3 className="text-[25px] text-[#000] font-bold">Leave History</h3>
        <div className="flex items-center py-6 gap-10">
          {/* Filter by Type */}
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

          {/* Dropdown Export file */}
          <ExportDropdown onExport={handleExport} />
        </div>
      </div>

      {/* Leave History table */}
      <GenericTable data={filteredData} columns={columns} />
    </div>
  );
};

export default LeaveHistorySection;
