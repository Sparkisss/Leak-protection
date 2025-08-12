import { getUser } from './selectors';
import { useAppSelector } from '@/app/providers/store/hooks';

export function useAuth() {
  const { email, token, id } = useAppSelector(getUser);

  return {
    isAuth: Boolean(email && token),
    email,
    token,
    id,
  };
}
