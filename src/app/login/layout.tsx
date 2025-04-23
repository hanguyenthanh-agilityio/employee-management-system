import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Form First */}
      <div className="flex flex-col justify-center px-10 py-16">{children}</div>

      {/* Banner Second */}
      <div className="relative w-full h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#253D90] bg-[url(/login-banner.png)] bg-blend-multiply bg-cover bg-center bg-no-repeat z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-end justify-left p-8 text-white h-full">
          <div className="space-y-6">
            <h2 className=" font-bold text-[40px] pb-20">
              Manage all <span className="text-[#FFC20E]">HR Operations </span>
              from the comfort of your home.
            </h2>
            <div className="flex justify-left gap-3 pt-20">
              <span className="w-20 h-3 bg-[#FFC20E] rounded-full" />
              <span className="w-20 h-3 bg-white rounded-full" />
              <span className="w-20 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginLayout;
