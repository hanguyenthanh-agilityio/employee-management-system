'use client';

import { createLeaveApplication } from '@/api/leaveApplications';
import Breadcrumbs from '@/components/Breadcrumb';
import Form from '@/components/Form';
import { BookOpenIcon } from '@heroicons/react/16/solid';

const CreateLeavePage = () => {
  return (
    <>
      <Breadcrumbs paths={['Dashboard', 'Apply for Leave', 'Annual Leave']} />
      <div className="w-full max-w-[1151px] mx-auto bg-white p-14">
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] font-semibold text-[#1D1D1D] flex items-center justify-center gap-4">
            <BookOpenIcon width={45} height={45} />
            Leave Application
          </h2>
          <span className="text-[25px] text-[#1D1D1D] py-4">
            Fill the required fields below to apply for annual leave.
          </span>
        </div>

        <form
          action={createLeaveApplication}
          encType="multipart/form-data"
          method="POST"
        >
          <Form />
        </form>
      </div>
    </>
  );
};

export default CreateLeavePage;
