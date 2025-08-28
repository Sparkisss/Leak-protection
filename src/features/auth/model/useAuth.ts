import { getUser } from './selectors';
import { useAppSelector } from '@/shared/lib/store/hooks';

export function useAuth() {
  const { email, token, id } = useAppSelector(getUser);

  return {
    isAuth: Boolean(email && token),
    email,
    token,
    id,
  };
}
