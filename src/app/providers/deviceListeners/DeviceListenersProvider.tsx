import { useEffect, type ReactNode } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/hooks';
import {
  startDeviceListeners,
  stopDeviceListeners,
} from '@/entities/module/model/deviceThunk';

const DeviceListenersProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(state => state.device.selectedId);

  useEffect(() => {
    if (!selectedId) return;
    dispatch(startDeviceListeners(selectedId));

    return () => {
      dispatch(stopDeviceListeners(selectedId));
    };
  }, [dispatch, selectedId]);

  return <>{children}</>;
};

export default DeviceListenersProvider;
