// Components
import BirthdaySection from '@/components/BirthdaySection';
import Header from '@/components/Common/Header';
import LeaveSection from '@/components/LeaveSection';
import PaySlipSection from '@/components/PaySlipSection';
import ProfileSection from '@/components/ProfileSection';
import QuickActions from '@/components/QuickActions';

const DashboardPage = () => (
  <section className="flex flex-col gap-12">
    <Header title="Dashboard" />

    {/* Profile Section */}
    <ProfileSection
      name="Redwan husein"
      jobTitle="UI / UX Designer & UX Writer"
    />

    {/* Quickly Action */}
    <QuickActions />

    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
      <LeaveSection />
      <BirthdaySection />
      <PaySlipSection />
    </div>
  </section>
);

export default DashboardPage;
