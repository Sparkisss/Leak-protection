import Button from '@/shared/ui/Button/Button';
import { NavLink } from 'react-router';

const AuthButton = () => {
  return (
    <article className="flex-center gap-7">
      <NavLink to="/auth">
        <Button>Auth</Button>
      </NavLink>
      <img
        className="hidden md:block"
        src="/public/userLogo/userProfile.png"
        alt="user icon"
      />
    </article>
  );
};

export default AuthButton;
