import Breadcrumbs from '@/components/Breadcrumb';
import { BookOpenIcon } from '@heroicons/react/16/solid';
import { fetchLeaveApplicationById } from '@/api/leaveApplications';
import EditForm from './editForm';

interface Props {
  params: { id: string };
}

const UpdateLeavePage = async ({ params }: Props) => {
  try {
    const leave = await fetchLeaveApplicationById(params.id);

    if (!leave) return <div>Leave application not found!</div>;

    return (
      <>
        <Breadcrumbs paths={['Dashboard', 'Apply for Leave', 'Edit']} />
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

          <EditForm leave={leave} />
        </div>
      </>
    );
  } catch (err) {
    console.error('Error fetching leave application:', err);
    return <div>Failed to load leave application.</div>;
  }
};

export default UpdateLeavePage;
