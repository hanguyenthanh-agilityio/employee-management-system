import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  type: 'login' | 'register';
}

export function AuthLayout({ children, type }: AuthLayoutProps) {
  const isRegister = type === 'register';
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {isRegister ? (
        <>
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
              <div className="flex flex-col space-y-4 max-w-md pt-20">
                <h2 className="text-2xl font-bold">HR Management Platform</h2>
                <p className="text-sm">
                  Manage all employees, payrolls, and other HR tasks
                  efficiently.
                </p>
                <div className="flex  gap-4">
                  <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded">
                    Learn More
                  </button>
                  <button className="border border-white px-4 py-2 rounded hover:bg-white/10">
                    Our Features
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Second */}
          <div className="flex flex-col justify-center px-10 py-16">
            {children}
          </div>
        </>
      ) : (
        <>
          {/* Form First */}
          <div className="flex flex-col justify-center px-10 py-16">
            {children}
          </div>

          {/* Banner Second */}
          <div className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src="/login-banner.jpg"
              alt="Login Banner"
              layout="fill"
              objectFit="cover"
              className="z-0"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A278F]/80 z-10" />

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center p-8 text-white h-full">
              <div className="text-center space-y-6 max-w-sm">
                <h2 className="text-xl font-bold">
                  Manage all
                  <span className="text-yellow-400">HR Operations</span> from
                  the comfort of your home.
                </h2>
                <div className="flex justify-center gap-1">
                  <span className="w-3 h-1 bg-white rounded-full" />
                  <span className="w-3 h-1 bg-white/50 rounded-full" />
                  <span className="w-3 h-1 bg-white/50 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
