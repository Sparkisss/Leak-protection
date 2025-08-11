import { TYPOGRAPHY } from '@/shared/const/typography';
import cn from 'classnames';

interface SectionTitleProps {
  info: string;
  title: string;
}

const SectionTitle = ({ info, title }: SectionTitleProps) => {
  const textClasses = cn(
    'mb-2 md:mb-4 bg-gradient-to-l from-[#ad1aaf] to-[#f9fafb] bg-clip-text text-transparent',
    TYPOGRAPHY.caption
  );
  const titleClasses = cn('text-center', TYPOGRAPHY.h2);
  return (
    <article className="mb-20">
      <div className={textClasses}>{info}</div>
      <div className={titleClasses}>{title}</div>
    </article>
  );
};

export default SectionTitle;
