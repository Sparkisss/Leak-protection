import Logo from '@/shared/ui/Logo/Logo';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import { headerConst } from '../config/headerMenu.confug';
import LogoutButton from '@/features/auth/ui/LogoutButton';

const Header = () => {
  return (
    <header className="flex justify-between w-full mb-15 md:mb-25 lg:mb-30">
      <Logo />
      <Navbar menu={headerConst} />
      <LogoutButton />
    </header>
  );
};

export default Header;
