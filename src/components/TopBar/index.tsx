import TopBarNav from '../TopBarNav';

const TopBar = () => {
  return (
    <header className="bg-white shadow-sm px-6 pt-6 flex items-center justify-center">
      <div className="flex gap-12">
        <TopBarNav />
      </div>
    </header>
  );
};

export default TopBar;
