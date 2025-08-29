import DashboardHeader from './DashboardHeader';
import { Divider } from '@/shared/ui/Divider/Divider';
import ProjectList from './ProjectList';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import {
  listOfObjects,
  listOfMods,
  listOfEvents,
} from '../config/dashboardLists';
import DeviceMode from '../../../features/device/ui/DeviceMode';
import { useAppSelector } from '@/shared/lib/store/hooks';
import { selectDeviceLoadingStatus } from '@/entities/device/model/selectors';
import { useEffect } from 'react';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

const DashboardPage = () => {
  const loadingStatus = useAppSelector(selectDeviceLoadingStatus);
  useEffect(() => {
    console.log(loadingStatus);
  }, [loadingStatus]);

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
        {loadingStatus === 'pending' ||
        loadingStatus === 'waitingConfirmation' ? (
          <Spinner />
        ) : (
          <>
            <DeviceMode list={listOfMods} />
            <DeviceMode list={listOfEvents} />
          </>
        )}
      </section>
      <Divider />
    </>
  );
};

export default DashboardPage;
