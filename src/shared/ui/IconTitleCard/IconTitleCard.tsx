import { TYPOGRAPHY } from '@/shared/const/typography';
import { IconManualMode } from '@/shared/ui/icons/IconManualMode';
import { IconAutoMode } from '@/shared/ui/icons/IconAutoMode';
import cn from 'classnames';
import type { Mode } from '@/entities/module/model/types';

interface IconTitleCardProps {
  obj: {
    id: number;
    mode: Mode;
    icon: 'manual' | 'auto';
    title: string;
  };
  alarm: boolean;
  isActive: boolean;
  state: boolean;
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
  state,
  onClick,
}: IconTitleCardProps) => {
  const Icon = iconsMap[obj.icon];

  return (
    <section
      className="flex flex-col h-full justify-center items-center relative"
      onClick={onClick}
    >
      <div
        className={cn(
          'absolute -right-1.5 -top-2.5 w-3 h-3 rounded-full',
          state ? 'bg-red-600' : 'bg-green-600'
        )}
      />
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
