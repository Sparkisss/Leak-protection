import { TYPOGRAPHY } from '@/shared/const/typography';

interface IconTitleCardProps {
  obj: {
    id: number;
    mode: number;
    icon: React.ReactNode;
    title: string;
  };
}

const IconTitleCard = ({ obj }: IconTitleCardProps) => {
  return (
    <section
      className="flex flex-col h-full justify-center items-center"
      key={obj.id}
    >
      {obj.icon}
      <div
        className={`${TYPOGRAPHY.caption} flex-1 flex justify-center items-center`}
      >
        {obj.title}
      </div>
    </section>
  );
};

export default IconTitleCard;
