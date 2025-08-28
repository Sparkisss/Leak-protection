import Button from '@/shared/ui/Button/Button';
import { NavLink } from 'react-router';
import { removeUser } from '../../../entities/user/model/userSlice';
import { useAppDispatch } from '@/shared/lib/store/hooks';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  return (
    <article className="flex-center gap-7">
      <NavLink to="/auth">
        <Button onClick={() => dispatch(removeUser())}>Logout</Button>
      </NavLink>
      <img
        className="hidden md:block"
        src="/userLogo/userProfile.png"
        alt="user icon"
      />
    </article>
  );
};

export default LogoutButton;
