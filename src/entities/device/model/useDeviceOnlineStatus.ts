import { useAppSelector } from '@/shared/lib/store/hooks';
import { useEffect, useState } from 'react';
import {
  selectDeviceLoadingStatus,
  selectDeviceConnection,
  selectIsDeviceOnline,
} from './selectors';

export const useDeviceOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);
  const loadingStatus = useAppSelector(selectDeviceLoadingStatus);
  const isConnectedToDB = useAppSelector(selectDeviceConnection);
  const lastSeen = useAppSelector(selectIsDeviceOnline);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setIsOnline(lastSeen ? now - lastSeen < 200000 : false);
    }, 50000);

    return () => clearInterval(interval);
  }, [lastSeen]);

  return { isOnline, loadingStatus, isConnectedToDB };
};
