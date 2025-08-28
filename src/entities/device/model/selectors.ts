import type { RootState } from '@/app/providers/store/store';
import { createSelector } from '@reduxjs/toolkit';
import type { DeviceStatusState, SensorState } from './types';

// базовый селектор
export const selectDeviceSlice = (state: RootState) => state.device;

// --- device ---
export const selectDeviceStatus = createSelector(
  selectDeviceSlice,
  slice => slice.device
);

export const selectDeviceAlarm = createSelector(
  selectDeviceStatus,
  (device): boolean => device?.alarm ?? false
);

export const selectDeviceMode = createSelector(
  selectDeviceStatus,
  (device): DeviceStatusState['mode'] => device?.mode ?? 0
);

export const selectRelay1Open = createSelector(
  selectDeviceStatus,
  device => device?.relay1_open ?? false
);

export const selectRelay1Close = createSelector(
  selectDeviceStatus,
  device => device?.relay1_close ?? false
);

export const selectRelay2Open = createSelector(
  selectDeviceStatus,
  device => device?.relay2_open ?? false
);

export const selectRelay2Close = createSelector(
  selectDeviceStatus,
  device => device?.relay2_close ?? false
);

// --- sensor ---
export const selectSensorStatus = createSelector(
  selectDeviceSlice,
  slice => slice.sensor
);

export const selectLakeStatus = createSelector(
  selectSensorStatus,
  (sensor: SensorState | null): boolean => sensor?.lake ?? false
);

// --- системные ---
export const selectDeviceLoadingStatus = createSelector(
  selectDeviceSlice,
  slice => slice.commandStatus
);

export const selectDeviceError = createSelector(
  selectDeviceSlice,
  slice => slice.error
);

export const selectDeviceConnection = createSelector(
  selectDeviceSlice,
  slice => slice.isConnected
);
