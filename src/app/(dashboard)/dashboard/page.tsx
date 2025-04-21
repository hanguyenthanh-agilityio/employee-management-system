import Header from '@/components/Header';
import ProfileSection from './components/ProfileSection';
import QuickActions from './components/QuickActions';

const DashboardPage = () => (
  <section className="flex flex-col gap-12">
    <Header title="Dashboard" />
    <ProfileSection
      name="Redwan husein"
      jobTitle="UI / UX Designer & UX Writer"
    />
    <QuickActions />
  </section>
);

export default DashboardPage;
