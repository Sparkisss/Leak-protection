import AuthButtonsGroup from '@/features/auth/ui/AuthButtonsGroup';
import AuthTitle from '@/features/auth/ui/AuthTitle';
import LoginForm from '@/features/auth/ui/LoginForm';
import RegistrationForm from '@/features/auth/ui/RegistrationForm';
import UserProfileBadge from '@/features/auth/ui/UserProfileBadge';
import { useState } from 'react';

const AutchPage = () => {
  const [register, setRegister] = useState<boolean>(false);

  return (
    <main className="h-screen w-screen">
      <UserProfileBadge />
      <AuthTitle />
      {register ? <RegistrationForm /> : <LoginForm />}
      <AuthButtonsGroup setRegister={() => setRegister(prev => !prev)} />
    </main>
  );
};

export default AutchPage;
