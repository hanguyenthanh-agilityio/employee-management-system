'use client';

import Input from '../Input';
// import Select from '../Select';
import { Button } from '../Button';
import { LeaveItem } from '@/types/components';

const Form = ({
  defaultLeaveType,
  leave,
}: {
  defaultLeaveType?: string;
  leave?: LeaveItem;
}) => {
  return (
    <>
      <Input
        label="Leave Type"
        name="leaveType"
        labelClassName="text-[25px] text-[#1D1D1D]"
        inputClassName="my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]"
        defaultValue={leave?.type || defaultLeaveType}
        readOnly
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Start Date"
          name="startDate"
          type="date"
          labelClassName="text-[25px] text-[#1D1D1D]"
          inputClassName="my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]"
          defaultValue={leave?.startDate}
          required
        />
        <Input
          label="End Date"
          name="endDate"
          type="date"
          labelClassName="text-[25px] text-[#1D1D1D]"
          inputClassName="my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]"
          defaultValue={leave?.endDate}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Duration (days)"
          name="durations"
          type="number"
          labelClassName="text-[25px] text-[#1D1D1D]"
          inputClassName="my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]"
          defaultValue={leave?.durations}
          required
        />
        <Input
          label="Resumption Date"
          name="resumptionDate"
          type="date"
          labelClassName="text-[25px] text-[#1D1D1D]"
          inputClassName="my-5 bg-[#E3EDF9] text-xl border-none p-3 rounded-[9px]"
          defaultValue={leave?.resumptionDate}
          required
        />
      </div>

      <div>
        <label className="text-[25px] text-[#1D1D1D]">Reason for Leave</label>
        <textarea
          name="reason"
          className="bg-[#E3EDF9] mt-1 block w-full rounded-[9px] border px-4 py-2 text-[25px]"
          rows={2}
          defaultValue={leave?.reason}
        />
      </div>

      <div className="py-5">
        <label className="text-[25px] text-[#1D1D1D]">
          Attach handover document (pdf, jpg, docx or any other format)
        </label>
        <input
          type="file"
          name="handover"
          className="bg-[#E3EDF9] mt-2 block w-full text-sm file:rounded-md file:border-0 file:bg-[#242121] file:px-4 file:py-4 file:text-white hover:file:bg-blue-100"
        />
      </div>

      {/* <Select
        label="Choose Relief Officer"
        name="reliefOfficer"
        options={[
          { value: 'officer1', label: 'Officer 1' },
          { value: 'officer2', label: 'Officer 2' },
        ]}
      /> */}

      <div className="flex justify-between py-4">
        <Button type="submit" customClass="bg-green-600 hover:bg-green-700">
          Submit
        </Button>
        <Button
          type="reset"
          variant="outline"
          customClass="text-red-500 border-red-500 hover:bg-red-50"
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default Form;
