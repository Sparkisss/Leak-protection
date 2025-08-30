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
import { Spinner } from '@/shared/ui/Spinner/Spinner';
import { useDeviceOnlineStatus } from '@/entities/device/model/useDeviceOnlineStatus';

const DashboardPage = () => {
  const { isOnline, loadingStatus, isConnectedToDB } = useDeviceOnlineStatus();

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
        {isConnectedToDB ? (
          loadingStatus === 'pending' ||
          loadingStatus === 'waitingConfirmation' ? (
            <Spinner />
          ) : isOnline ? (
            <>
              <DeviceMode list={listOfMods} />
              <DeviceMode list={listOfEvents} />
            </>
          ) : (
            <div className="w-full flex justify-center align-middle">
              🔴 Offline
            </div>
          )
        ) : (
          <div>Offline mode</div>
        )}
      </section>
      <Divider />
    </>
  );
};

export default DashboardPage;
