import { TYPOGRAPHY } from '@/shared/const/typography';
import type { ModuleList } from '../model/types';

const ModuleCard = ({ id, type, img, controller }: ModuleList) => {
  return (
    <section
      key={id}
      className="flex flex-col justify-between backdrop-blur-3xl w-18 sm:w-20 md:w-42 lg:w-full"
    >
      <div className="backdrop-blur-lg backdrop-filter bg-transparent border-b-[#8C30F5] border-solid mb-3">
        <img className="w-full h-full" src={img} alt={type} />
      </div>
      <div className="text-center">
        <h3 className={TYPOGRAPHY.caption}>{type}</h3>
        <div className={TYPOGRAPHY.caption}>{controller}</div>
      </div>
    </section>
  );
};

export default ModuleCard;
