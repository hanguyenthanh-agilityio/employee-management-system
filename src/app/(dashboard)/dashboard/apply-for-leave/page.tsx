import Breadcrumbs from '@/components/Breadcrumb';
import LeaveHistorySection from './components/LeaveHistorySection';
import { BookOpenIcon } from '@heroicons/react/16/solid';
import LeaveApplicationSection from './components/LeaveApplicationSection';

const sampleLeaveData = [
  {
    name: 'Abenezer kebede',
    duration: 5,
    startDate: '22/04/2022',
    endDate: '28/04/2022',
    type: 'Sick',
    reason: 'Personal',
  },
  {
    name: 'Abenezer kebede',
    duration: 7,
    startDate: '22/04/2022',
    endDate: '30/04/2022',
    type: 'Exam',
    reason: 'Examination',
  },
  {
    name: 'Abenezer kebede',
    duration: 120,
    startDate: '22/04/2022',
    endDate: '28/06/2022',
    type: 'Maternity',
    reason: 'Child Care',
  },
  {
    name: 'Abenezer kebede',
    duration: 5,
    startDate: '22/04/2022',
    endDate: '28/04/2022',
    type: 'Sick',
    reason: 'Personal',
  },
  {
    name: 'Abenezer kebede',
    duration: 5,
    startDate: '22/04/2022',
    endDate: '28/04/2022',
    type: 'Sick',
    reason: 'Personal',
  },
  {
    name: 'Abenezer kebede',
    duration: 5,
    startDate: '22/04/2022',
    endDate: '28/04/2022',
    type: 'Sick',
    reason: 'Personal',
  },
];

const ApplyForLeavePage = () => (
  <>
    <Breadcrumbs paths={['Dashboard', 'Apply for Leave']} />
    <div className="bg-white">
      <div className="p-8">
        <h2 className="flex item-center gap-4 text-3xl text-[#1D1D1D] px-5 py-8">
          <BookOpenIcon width={34} height={34} />
          Leave Application
        </h2>
        <LeaveApplicationSection />
        <LeaveHistorySection data={sampleLeaveData} />
      </div>
    </div>
  </>
);

export default ApplyForLeavePage;
