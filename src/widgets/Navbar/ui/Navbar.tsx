import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-3xl">
      <ul className="flex-center gap-12 px-12 py-6">
        <li>
          <NavLink className="cursor-pointer" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="cursor-pointer" to="/statistics">
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink className="cursor-pointer" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
