import { ReactNode } from 'react';
import Image from 'next/image';

const RegisterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Banner First */}
      <div className="relative w-full h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#253D90] bg-[url(/register-banner.png)] bg-blend-multiply bg-cover bg-center bg-no-repeat z-10" />

        {/* Content */}
        <div className="relative z-20 py-6 text-white h-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={324}
            height={78}
            className="mb-20"
          />
          <div className="flex justify-center">
            <div className="flex flex-col space-y-4 pt-20">
              <h2 className="text-[50px] font-bold">HR Management Platform</h2>
              <div className="w-[140px] rounded-lg border-[10px] border-solid" />
              <p className="text-3xl py-4">
                Manage all employees, payrolls, and other HR tasks efficiently.
              </p>
              <div className="flex  gap-4">
                <button className="text-[25px] bg-yellow-400 text-black font-bold px-10 py-4 rounded-[11px]">
                  Learn More
                </button>
                <button className="text-[25px] font-bold border-4 border-white px-10 py-4 rounded-[11px] hover:bg-white/10">
                  Our Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Second */}
      <div className="flex flex-col justify-center px-10 py-16">{children}</div>
    </main>
  );
};

export default RegisterLayout;
