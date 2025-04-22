import Header from '@/components/Header';
import ProfileSection from './components/ProfileSection';
import QuickActions from './components/QuickActions';
import LeaveSection from './components/LeaveSection';
import BirthdaySection from './components/BirthdaySection';
import PaySlipSection from './components/PaySlipSection';

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
      <PaySlipSection />
      <BirthdaySection />
    </div>
  </section>
);

export default DashboardPage;
