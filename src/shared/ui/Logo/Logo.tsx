import { TYPOGRAPHY } from '@/shared/const/typography';

const Logo = () => {
  return (
    <article className="flex-center flex-col md:flex-row">
      <img className="icon-logo" src="/logo/Logo.png" alt="Logo" />
      <div className={`${TYPOGRAPHY.body} text-standart`}>yourguard</div>
    </article>
  );
};

export default Logo;
