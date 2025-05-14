
import React from 'react';
import AtosCapitalLogo from './AtosCapitalLogo';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-atos-red flex items-center justify-center p-4">
      <div className="max-w-[960px] w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center min-w-[260px] text-white">
          <AtosCapitalLogo width={280} height={100} className="text-white" />
          <h1 className="sr-only">ATOS CAPITAL - Login</h1>
          <p className="mt-4 text-white/90 text-center max-w-xs">
            Plataforma de gerenciamento para os seus investimentos
          </p>
        </div>

        {/* Form Column */}
        <div className="w-full max-w-[420px] mx-auto">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
