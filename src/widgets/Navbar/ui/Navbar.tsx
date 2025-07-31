import { NavLink } from 'react-router';
interface MenuItem {
  id: string;
  title: string;
}
interface HeaderColumnProps {
  menu: MenuItem[];
}

const Navbar = ({ menu }: HeaderColumnProps) => {
  return (
    <nav className="bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-3xl">
      <ul className="flex-center gap-12 px-12 py-6">
        {menu.map(item => (
          <li key={item.id}>
            <NavLink to={item.title.toLowerCase()}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
