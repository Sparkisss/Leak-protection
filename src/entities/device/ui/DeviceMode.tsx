import { Card } from '@/shared/ui/Card/Card';
import type { Mode } from '../model/types';
import { DeviceModeCard } from '@/features/device/ui/DeviceModeCard';

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
  return (
    <section className="flex flex-wrap mb-30 gap-5 lg:gap-8 items-stretch">
      {list.map(obj => (
        <Card className="flex-1" key={obj.id}>
          <DeviceModeCard obj={obj} />
        </Card>
      ))}
    </section>
  );
};

export default DeviceMode;
