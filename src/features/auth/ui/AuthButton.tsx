import Button from '@/shared/ui/Button/Button';

const AuthButton = () => {
  return (
    <article className="flex-center gap-7">
      <Button>Auth</Button>
      <img src="/public/userLogo/userProfile.png" alt="user icon" />
    </article>
  );
};

export default AuthButton;
