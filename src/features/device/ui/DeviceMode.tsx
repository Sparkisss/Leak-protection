import { Card } from '@/shared/ui/Card/Card';
import type { Mode } from '../../../entities/device/model/types';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import {
  selectDeviceAlarm,
  selectDeviceMode,
  selectDeviceStates,
} from '../../../entities/device/model/selectors';
import IconTitleCard from '../../../entities/device/ui/IconTitleCard';
import { handleDeviceCommand } from '../../../entities/device/model/deviceLogic';

interface ListItem {
  id: number;
  mode: Mode;
  icon: 'manual' | 'auto';
  title: string;
}
interface CardsGridProps {
  list: ListItem[];
}

const DeviceMode = ({ list }: CardsGridProps) => {
  const dispatch = useAppDispatch();
  const alarm = useAppSelector(selectDeviceAlarm);
  const mode = useAppSelector(selectDeviceMode);
  const stateMap = useAppSelector(selectDeviceStates);

  return (
    <section className="flex flex-wrap mb-30 gap-5 lg:gap-8 items-stretch">
      {list.map(obj => (
        <Card className="flex-1" key={obj.id}>
          <IconTitleCard
            obj={obj}
            alarm={alarm}
            isActive={mode === obj.mode}
            state={stateMap[obj.mode]}
            onClick={() =>
              handleDeviceCommand(dispatch, obj.id, mode, obj.mode)
            }
          />
        </Card>
      ))}
    </section>
  );
};

export default DeviceMode;
