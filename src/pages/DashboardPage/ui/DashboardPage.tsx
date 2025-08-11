import DashboardHeader from './DashboardHeader';
import { Divider } from '../../../shared/ui/Divider/Divider';
import ProjectList from './ProjectList';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import CardsGrid from '../../../shared/ui/CardsGrid/CardsGrid';
import { IconManualMode } from '@/shared/ui/Icons/IconManualMode';
import { IconAutoMode } from '@/shared/ui/Icons/IconAutoMode';
import { IconAlarm } from '@/shared/ui/Icons/IconAlarm';
import { IconOpen } from '@/shared/ui/Icons/IconOpen';
import { IconDown } from '@/shared/ui/Icons/IconDown';

const DashboardPage = () => {
  const listOfObjects = [
    {
      id: 1,
      title: 'My house',
      device: 'Leak protection',
      img: '/cards/object1.png',
      styles:
        'z-3 translate-x-0 -translate-y-5 scale-100 opacity-100 absolute sm:-translate-y-10 md:-translate-y-20',
    },
    {
      id: 2,
      title: 'My office',
      device: 'Leak protection',
      img: '/cards/object2.png',
      styles:
        'z-2 -translate-x-10 scale-95 opacity-80 absolute sm:-translate-y-5 sm:-translate-x-10 md:-translate-x-18 lg:-translate-x-25 xl:-translate-x-30',
    },
    {
      id: 3,
      title: 'My countryhouse',
      device: 'Leak protection',
      img: '/cards/object3.png',
      styles:
        'z-1 translate-x-10 translate-y-5 scale-[0.9] opacity-80 absolute sm:translate-y-0 sm:translate-x-10 md:translate-y-10 md:translate-x-18 lg:translate-x-25 xl:translate-x-30',
    },
  ];
  const listOfMods = [
    { id: 1, mode: 0, icon: <IconAutoMode />, title: 'auto' },
    {
      id: 2,
      mode: 1,
      icon: <IconManualMode />,
      title: 'manual valve 1 open',
    },
    {
      id: 3,
      mode: 2,
      icon: <IconManualMode />,
      title: 'manual valve 1 close',
    },
    {
      id: 4,
      mode: 3,
      icon: <IconManualMode />,
      title: 'manual valve 2 open',
    },
    {
      id: 5,
      mode: 4,
      icon: <IconManualMode />,
      title: 'manual valve 2 close',
    },
  ];
  const listOfEvents = [
    { id: 1, mode: 0, icon: <IconAlarm />, title: 'Reset Alarm' },
    {
      id: 2,
      mode: 1,
      icon: <IconOpen />,
      title: 'Valve open',
    },
    {
      id: 3,
      mode: 2,
      icon: <IconDown />,
      title: 'Valve close',
    },
  ];

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
