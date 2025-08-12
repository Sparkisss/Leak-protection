import DashboardHeader from './DashboardHeader';
import { Divider } from '../../../shared/ui/Divider/Divider';
import ProjectList from './ProjectList';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import CardsGrid from '../../../shared/ui/CardsGrid/CardsGrid';
import {
  listOfObjects,
  listOfMods,
  listOfEvents,
} from '../config/dashboardLists';

const DashboardPage = () => {
  return (
    <>
      <section className="flex flex-col items-center relative mb-60 sm:mb-20 lg:mb-40 sm:flex-row sm:gap-8 sm:items-baseline">
        <DashboardHeader />
        <ProjectList listOfObjects={listOfObjects} />
      </section>
      <Divider />
      <section>
        <SectionTitle
          info="You can change device mode"
          title="Mods that the device supports"
        />
        <CardsGrid list={listOfMods} />
      </section>
      <Divider />
      <section>
        <SectionTitle
          info="You can manage your device"
          title="Available operations in the selected mode"
        />
        <CardsGrid list={listOfEvents} />
      </section>
      <Divider />
    </>
  );
};

export default DashboardPage;
