import { TYPOGRAPHY } from '@/shared/const/typography';
interface ProjectSiteProps {
  obj: {
    id: number;
    title: string;
    device: string;
    img: string;
    styles: string;
  };
}

const ProjectSite = ({ obj }: ProjectSiteProps) => {
  return (
    <section
      key={obj.id}
      className="flex flex-col justify-between backdrop-blur-3xl w-18 sm:w-20 md:w-42 lg:w-full"
    >
      <div className="backdrop-blur-lg backdrop-filter bg-transparent border-b-[#8C30F5] border-solid">
        <img className="w-full h-full" src={obj.img} alt={obj.title} />
      </div>
      <div className="text-center">
        <h3 className={`${TYPOGRAPHY.body} mb-4`}>{obj.title}</h3>
        <div className={TYPOGRAPHY.caption}>{obj.device}</div>
      </div>
    </section>
  );
};

export default ProjectSite;
