import AuthButton from '@/features/auth/ui/AuthButton';
import Logo from '@/shared/ui/Logo/Logo';
import Navbar from '@/widgets/Navbar/ui/Navbar';

const Header = () => {
  return (
    <header className="flex justify-between w-full">
      <Logo />
      <Navbar />
      <AuthButton />
    </header>
  );
};

export default Header;
