import { TYPOGRAPHY } from '@/shared/const/typography';
import { IconMenu } from '@/shared/ui/icons/IconMenu';
import cn from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router';

interface MenuItem {
  id: number;
  title: string;
}

interface HeaderColumnProps {
  menu: MenuItem[];
}

const Navbar = ({ menu }: HeaderColumnProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const classesNav = cn(
    'fixed top-0 left-0 w-64 bg-[#140C1F] h-full transform transition-transform duration-300 ease-in-out z-50',
    'md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:flex md:flex-row md:items-center md:justify-center md:backdrop-blur-3xl md:from-white/10 md:to-white/0 md:bg-transparent md:bg-gradient-to-b from-white/10 to-white/0 md:backdrop-blur-3xl',
    isOpen ? 'translate-x-0' : '-translate-x-full'
  );

  return (
    <>
      {/* Основное меню */}
      <nav className={classesNav}>
        <ul className="flex flex-col p-20 space-y-8 md:flex-row md:space-y-0 md:py-6 md:gap-8 md:px-8">
          {menu.map(item => (
            <li key={item.id} className="text-standart">
              <NavLink
                to={`/${item.title.toLowerCase()}`}
                className={({ isActive }) =>
                  cn(
                    'hover:text-amber-100 transition-colors duration-200 md:text-lg',
                    isActive ? 'text-[#AD1AAF]' : 'font-bold text-white',
                    TYPOGRAPHY.body
                  )
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Кнопка бургера */}
      <button
        className="md:hidden block w-10 h-10 p-0"
        onClick={() => setOpen(!isOpen)}
      >
        <IconMenu className="w-10 h-10" />
      </button>
    </>
  );
};

export default Navbar;
