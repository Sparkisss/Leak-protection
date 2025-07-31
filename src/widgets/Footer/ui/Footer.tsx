import Logo from '@/shared/ui/Logo/Logo';
import FooterBottom from './FooterBottom';
import FooterColumn from './FooterColumn';
import { menuAbout, menuSupport } from '../config/footerMenu.config';

const Footer = () => {
  return (
    <footer className="flex items-start justify-between w-full gap-35">
      <Logo />
      <FooterBottom />
      <FooterColumn menu={menuAbout} />
      <FooterColumn menu={menuSupport} />
    </footer>
  );
};

export default Footer;
