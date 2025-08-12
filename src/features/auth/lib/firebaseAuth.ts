import type { AppDispatch } from '@/app/providers/store/store';
import { setUser } from '@/entities/user/model/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = (
  email: string,
  password: string,
  dispatch: AppDispatch
) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
    dispatch(
      setUser({
        email: user.email ?? '',
        id: user.uid,
        token: user.refreshToken,
      })
    );
  });
};
