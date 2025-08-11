import IconTitleCard from '@/shared/ui/IconTitleCard/IconTitleCard';
import { Card } from '@/shared/ui/Card/Card';

interface ListItem {
  id: number;
  mode: number;
  icon: React.ReactNode;
  title: string;
}
interface CardsGridProps {
  list: ListItem[];
}

const CardsGrid = ({ list }: CardsGridProps) => {
  return (
    <section className="flex flex-wrap mb-30 gap-5 lg:gap-8 items-stretch">
      {list.map(obj => (
        <Card className="flex-1" key={obj.id}>
          <IconTitleCard obj={obj} />
        </Card>
      ))}
    </section>
  );
};

export default CardsGrid;
