import Logo from '@/shared/ui/Logo/Logo';
import FooterBottom from './FooterBottom';
import FooterColumn from './FooterColumn';
import { menuAbout, menuSupport } from '../config/footerMenu.config';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center w-full gap-10 sm:flex-row sm:items-start">
      <div className="flex justify-between gap-10">
        <Logo />
        <FooterBottom />
      </div>
      <div className="flex gap-10">
        <FooterColumn menu={menuAbout} />
        <FooterColumn menu={menuSupport} />
      </div>
    </footer>
  );
};

export default Footer;
