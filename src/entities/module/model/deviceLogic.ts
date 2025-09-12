import type { AppDispatch } from '@/app/providers/store/store';
import {
  updateAlarmStatus,
  updateRelayStatus,
  updateDeviceMode,
} from './deviceThunk';
import type { Mode } from './types';

export const handleDeviceCommand = (
  dispatch: AppDispatch,
  id: number,
  mode: Mode,
  curMode: Mode
) => {
  if (id < 1 || id > 7) {
    throw new Error('Incorrect item ID');
  }
  if (mode < 0 || mode > 4) {
    throw new Error('Incorrect mode value');
  }
  if (id === 6)
    dispatch(updateAlarmStatus({ module: 'leakProtection', status: true }));
  if (id === 7) {
    if (mode === 0) {
      throw new Error('Relay mode must be between 1 and 4.');
    } else
      dispatch(updateRelayStatus({ module: 'leakProtection', value: mode }));
  }
  if (id > 0 && id <= 5)
    dispatch(updateDeviceMode({ module: 'leakProtection', newMode: curMode }));
};
