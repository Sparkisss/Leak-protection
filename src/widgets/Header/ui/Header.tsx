import AuthButton from '@/features/auth/ui/AuthButton';
import Logo from '@/shared/ui/Logo/Logo';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import { headerConst } from '../config/headerMenu.confug';

const Header = () => {
  return (
    <header className="flex justify-between w-full">
      <Logo />
      <Navbar menu={headerConst} />
      <AuthButton />
    </header>
  );
};

export default Header;
