import { TYPOGRAPHY } from '@/shared/const/typography';

const Logo = () => {
  return (
    <article className="flex-center">
      <img src="/logo/Logo.png" alt="Logo" />
      <div className={TYPOGRAPHY.body}>yourguard</div>
    </article>
  );
};

export default Logo;
