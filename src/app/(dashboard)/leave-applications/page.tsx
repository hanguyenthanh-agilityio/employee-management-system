import Breadcrumbs from '@/components/Breadcrumb';
import LeaveHistorySection from './components/LeaveHistorySection';
import { BookOpenIcon } from '@heroicons/react/16/solid';
import LeaveApplicationSection from './components/LeaveApplicationSection';
import { fetchLeaveApplications } from '@/api/leaveApplications';
import { LeaveItem } from '@/types/components';

const ApplyForLeavePage = async () => {
  const data = await fetchLeaveApplications();

  const leaveData: LeaveItem[] = data.results;

  return (
    <>
      <Breadcrumbs paths={['Dashboard', 'Leave Applications']} />
      <div className="bg-white">
        <div className="p-8">
          <h2 className="flex item-center gap-4 text-3xl text-[#1D1D1D] px-5 py-8">
            <BookOpenIcon width={34} height={34} />
            Leave Application
          </h2>
          <LeaveApplicationSection />
          <LeaveHistorySection data={leaveData} />
        </div>
      </div>
    </>
  );
};

export default ApplyForLeavePage;
