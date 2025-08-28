import { createAsyncThunk } from '@reduxjs/toolkit';
import type { DeviceStatusState, Mode, SensorState } from './types';
import {
  setAlarmStatus,
  setDeviceMode,
  setRelayByMode,
  subscribeToDevice,
  subscribeToSensor,
} from '../lib/firebaseApi';
import { updateDeviceState, updateSensorState } from './deviceSlice';

let unsubscribeDevice: (() => void) | null = null;
let unsubscribeSensor: (() => void) | null = null;

// write data
export const updateDeviceMode = createAsyncThunk<
  Mode,
  Mode,
  { rejectValue: string }
>('device/updateMode', async (mode, { rejectWithValue }) => {
  try {
    await setDeviceMode(mode);
    return mode;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to update device mode'
    );
  }
});

export const updateAlarmStatus = createAsyncThunk<
  boolean,
  boolean,
  { rejectValue: string }
>('device/updateAlarm', async (status, { rejectWithValue }) => {
  try {
    await setAlarmStatus(status);
    return status;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to update alarm status'
    );
  }
});

export const updateRelayStatus = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('device/updateRelay', async (value, { rejectWithValue }) => {
  if (value < 1 || value > 4) {
    return rejectWithValue(`Incorrect relay value: ${value}`);
  }

  try {
    await setRelayByMode(value);
    return value;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to update relay'
    );
  }
});

// read data
export const startDeviceListeners = createAsyncThunk(
  'device/startListeners',
  (_, { dispatch }) => {
    if (!unsubscribeDevice) {
      unsubscribeDevice = subscribeToDevice((data: DeviceStatusState) => {
        dispatch(updateDeviceState(data));
      });
    }

    if (!unsubscribeSensor) {
      unsubscribeSensor = subscribeToSensor((data: SensorState) => {
        dispatch(updateSensorState(data));
      });
    }

    return true;
  }
);

export const stopDeviceListeners = createAsyncThunk(
  'device/stopListeners',
  () => {
    if (unsubscribeDevice) {
      unsubscribeDevice();
      unsubscribeDevice = null;
    }
    if (unsubscribeSensor) {
      unsubscribeSensor();
      unsubscribeSensor = null;
    }
    return true;
  }
);
