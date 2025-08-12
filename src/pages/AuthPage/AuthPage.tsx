import { loginUser } from '@/features/auth/lib/firebaseAuth';
import AuthForm from '@/features/auth/ui/AuthForm';
import AuthTitle from '@/features/auth/ui/AuthTitle';
import UserProfileBadge from '@/entities/user/ui/UserProfileBadge';
import { useAppDispatch } from '@/app/providers/store/hooks';
import { useNavigate } from 'react-router';

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) =>
    loginUser(email, password, dispatch).then(() => navigate('/'));

  return (
    <main className="h-full w-screen">
      <UserProfileBadge />
      <AuthTitle />
      <AuthForm
        fields={[
          { name: 'email', placeholder: 'Email', type: 'email' },
          { name: 'password', placeholder: 'Password', type: 'password' },
        ]}
        onSubmit={data => handleLogin(data.email, data.password)}
      />
    </main>
  );
};

export default AuthPage;
