import Button from '@/shared/ui/Button/Button';
import { TYPOGRAPHY } from '@/shared/const/typography';
import cn from 'classnames';

const DashboardHeader = () => {
  const headClasses = cn('mb-4', TYPOGRAPHY.h2);
  const textClasses = cn('mb-14', TYPOGRAPHY.body);
  return (
    <section className="w-4/5 mb-12 sm:mb-0 sm:w-3/6">
      <div className={headClasses}>
        YOU PROTECTION YOU SECURITY YOU SMART HOUSE
      </div>
      <div className={textClasses}>
        Shihami is the World’s first and largest NFT/Avatar marketplace
      </div>
      <div className="flex gap-10 flex-col sm:flex-row">
        <Button>Add Project</Button>
        <Button>Delete Project</Button>
      </div>
    </section>
  );
};

export default DashboardHeader;
