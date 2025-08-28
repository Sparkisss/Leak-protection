import { Card } from '@/shared/ui/Card/Card';
import ProjectSite from '@/entities/projectSite/ui/ProjectSite';
interface ListItem {
  id: number;
  title: string;
  device: string;
  img: string;
  styles: string;
}
interface ProjectListProps {
  listOfObjects: ListItem[];
}

const ProjectList = ({ listOfObjects }: ProjectListProps) => {
  return (
    <section className="w-4/5 h-full flex flex-wrap justify-center sm:w-3/6">
      {listOfObjects.map(obj => (
        <Card key={obj.id} className={obj.styles}>
          <ProjectSite obj={obj} />
        </Card>
      ))}
    </section>
  );
};

export default ProjectList;
