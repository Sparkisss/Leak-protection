import DashboardHeader from './DashboardHeader';
import { Divider } from '@/shared/ui/Divider/Divider';
import ModuleList from '@/entities/moduleList/ui/ModuleList';
import SectionTitle from '@/shared/ui/SectionTitle/SectionTitle';
import { listOfMods, listOfEvents } from '../config/dashboardLists';
import DeviceMode from '@/features/module/ui/ManageModule';
import { Spinner } from '@/shared/ui/Spinner/Spinner';
import { useDeviceOnlineStatus } from '@/entities/module/model/useDeviceOnlineStatus';
import { Transition } from 'react-transition-group';
import cn from 'classnames';
import { useRef } from 'react';

const DashboardPage = () => {
  const { isOnline, loadingStatus, isConnectedToDB } = useDeviceOnlineStatus();
  const spinnerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="flex flex-col items-center relative mb-60 sm:mb-20 lg:mb-40 sm:flex-row sm:gap-8 sm:items-baseline">
        <DashboardHeader />
        <ModuleList />
      </section>
      <Divider />
      <section className="relative">
        <SectionTitle
          info="You can change device mode"
          title="Mods that the device supports"
        />
        <Transition
          in={
            loadingStatus === 'pending' ||
            loadingStatus === 'waitingConfirmation'
          }
          timeout={500}
          nodeRef={spinnerRef}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div
              ref={spinnerRef}
              className={cn(
                'flex justify-center items-center transition-all duration-500 ease-in-out',
                state === 'entering' && 'opacity-0',
                state === 'entered' && 'opacity-100',
                state === 'exiting' && 'opacity-0',
                state === 'exited' && 'opacity-0'
              )}
            >
              <Spinner />
            </div>
          )}
        </Transition>
        {isConnectedToDB ? (
          isOnline ? (
            <>
              <DeviceMode list={listOfMods} />
              <DeviceMode list={listOfEvents} />
            </>
          ) : (
            <div className="w-full flex justify-center align-middle p-10">
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
