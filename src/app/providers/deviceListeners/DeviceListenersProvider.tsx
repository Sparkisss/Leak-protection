import { useEffect, type ReactNode } from 'react';
import { useAppDispatch } from '../../../shared/lib/store/hooks';
import {
  startDeviceListeners,
  stopDeviceListeners,
} from '@/entities/module/model/deviceThunk';

interface DeviceProps {
  children: ReactNode;
}

const DeviceListenersProvider = ({ children }: DeviceProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startDeviceListeners());
    return () => {
      dispatch(stopDeviceListeners());
    };
  }, [dispatch]);

  return <>{children}</>;
};

export default DeviceListenersProvider;
