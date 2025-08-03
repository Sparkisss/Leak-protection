import { NavLink } from 'react-router';
import { socialLinks, description, rights } from '../config/footerMenu.config';

const FooterBottom = () => {
  return (
    <div>
      <div className="mb-12 text-center text-standart hidden md:block">
        {description}
      </div>
      <ul className="flex-center gap-9 mb-4 mb:mb-12">
        {socialLinks.map(link => (
          <li key={link.name}>
            <NavLink to={link.url}>
              <img className="icon-layout " src={link.icon} alt={link.name} />
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="text-center text-standart">{rights}</div>
    </div>
  );
};

export default FooterBottom;
