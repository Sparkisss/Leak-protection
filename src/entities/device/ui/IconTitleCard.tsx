import { TYPOGRAPHY } from '@/shared/const/typography';
import { IconManualMode } from '../../../shared/ui/Icons/IconManualMode';
import { IconAutoMode } from '../../../shared/ui/Icons/IconAutoMode';
import cn from 'classnames';
import type { Mode } from '@/entities/device/model/types';

interface IconTitleCardProps {
  obj: {
    id: number;
    mode: Mode;
    icon: 'manual' | 'auto';
    title: string;
  };
  alarm: boolean;
  isActive: boolean;
  onClick: () => void;
}

const iconsMap: Record<'manual' | 'auto', React.ElementType> = {
  manual: IconManualMode,
  auto: IconAutoMode,
};

const IconTitleCard = ({
  obj,
  alarm,
  isActive,
  onClick,
}: IconTitleCardProps) => {
  const Icon = iconsMap[obj.icon];

  return (
    <section
      className="flex flex-col h-full justify-center items-center"
      onClick={onClick}
    >
      <Icon
        className={cn(
          'w-15 h-15 lg:w-25 lg:h-25 xl:w-38 xl:h-38 mb-8 border-2 rounded-full p-3 lg:p-6 bg-gray-300 backdrop-blur-3xl',
          alarm
            ? 'fill-red-500' // сигнал тревоги
            : isActive
              ? 'fill-green-500'
              : 'fill-[#F81DFB]'
        )}
      />
      <div
        className={`${TYPOGRAPHY.caption} flex-1 flex justify-center items-center`}
      >
        {obj.title}
      </div>
    </section>
  );
};

export default IconTitleCard;
