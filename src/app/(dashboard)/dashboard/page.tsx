import Header from '@/components/Header';
import ProfileSection from './components/ProfileSection';

const DashboardPage = () => (
  <section className="flex flex-col">
    <Header className="pb-8" title="Dashboard" />
    <ProfileSection
      name="Redwan husein"
      jobTitle="UI / UX Designer & UX Writer"
    />
  </section>
);

export default DashboardPage;
