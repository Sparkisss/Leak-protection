import AuthButtonsGroup from '@/features/auth/ui/AuthButtonsGroup';
import AuthTitle from '@/features/auth/ui/AuthTitle';
import RegistrationForm from '@/features/auth/ui/RegistrationForm';
import UserProfileBadge from '@/features/auth/ui/UserProfileBadge';

const AutchPage = () => {
  return (
    <main className="h-screen w-screen">
      <UserProfileBadge />
      <AuthTitle />
      <RegistrationForm />
      <AuthButtonsGroup />
    </main>
  );
};

export default AutchPage;
