// features/device/change-mode/ui/DeviceModeCard.tsx
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import {
  selectDeviceMode,
  selectDeviceAlarm,
} from '@/entities/device/model/selectors';
import { handleDeviceCommand } from '@/entities/device/model/deviceLogic';
import IconTitleCard from '@/entities/device/ui/IconTitleCard';
import type { Mode } from '@/entities/device/model/types';

interface IconTitleCardProps {
  obj: {
    id: number;
    mode: Mode;
    icon: 'manual' | 'auto';
    title: string;
  };
}

export const DeviceModeCard = ({ obj }: { obj: IconTitleCardProps['obj'] }) => {
  const dispatch = useAppDispatch();
  const alarm = useAppSelector(selectDeviceAlarm);
  const mode = useAppSelector(selectDeviceMode);
  const isActive = mode === obj.mode;

  return (
    <IconTitleCard
      obj={obj}
      alarm={alarm}
      isActive={isActive}
      onClick={() => handleDeviceCommand(dispatch, obj.id, mode, obj.mode)}
    />
  );
};
