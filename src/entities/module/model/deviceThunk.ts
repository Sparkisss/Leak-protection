import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  DeviceStatusState,
  SensorState,
  UpdateDeviceAlarmPayload,
  UpdateDeviceModePayload,
  UpdateRelayByModeyPayload,
} from './types';
import {
  setAlarmStatus,
  setDeviceMode,
  setRelayByMode,
  subscribeToDB,
  subscribeToDevice,
  subscribeToDeviceConnectionStatus,
  subscribeToSensor,
} from '../lib/moduleApi';
import {
  clearDeviceData,
  updateConnectedState,
  updateDeviceState,
  updateSensorState,
  updateConnectedDeviceState,
} from './deviceSlice';

let unsubscribeDevice: (() => void) | null = null;
let unsubscribeSensor: (() => void) | null = null;
let unsubscribeConnectedToDB: (() => void) | null = null;
let unsubscribeConnectedDeviceToDB: (() => void) | null = null;

// write data
export const updateDeviceMode = createAsyncThunk<
  UpdateDeviceModePayload,
  UpdateDeviceModePayload,
  { rejectValue: string }
>('device/updateMode', async (payload, { rejectWithValue }) => {
  const { module, newMode } = payload;
  try {
    await setDeviceMode(module, newMode);
    return payload;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to update device mode'
    );
  }
});

export const updateAlarmStatus = createAsyncThunk<
  UpdateDeviceAlarmPayload,
  UpdateDeviceAlarmPayload,
  { rejectValue: string }
>('device/updateAlarm', async (payload, { rejectWithValue }) => {
  const { module, status } = payload;
  try {
    await setAlarmStatus(module, status);
    return payload;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to update alarm status'
    );
  }
});

export const updateRelayStatus = createAsyncThunk<
  UpdateRelayByModeyPayload,
  UpdateRelayByModeyPayload,
  { rejectValue: string }
>('device/updateRelay', async (payload, { rejectWithValue }) => {
  const { module, value } = payload;
  if (value < 1 || value > 4) {
    return rejectWithValue(`Incorrect relay value: ${value}`);
  }

  try {
    await setRelayByMode(module, value);
    return payload;
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
      unsubscribeDevice = subscribeToDevice(
        'leakProtection',
        (data: DeviceStatusState | null) => {
          if (data) dispatch(updateDeviceState(data));
          else dispatch(clearDeviceData());
        }
      );
    }

    if (!unsubscribeSensor) {
      unsubscribeSensor = subscribeToSensor(
        'leakProtection',
        (data: SensorState | null) => {
          if (data) dispatch(updateSensorState(data));
          else dispatch(clearDeviceData());
        }
      );
    }

    if (!unsubscribeConnectedToDB) {
      unsubscribeConnectedToDB = subscribeToDB((isConnected: boolean) => {
        dispatch(updateConnectedState(isConnected));
      });
    }

    if (!unsubscribeConnectedDeviceToDB) {
      unsubscribeConnectedDeviceToDB = subscribeToDeviceConnectionStatus(
        'leakProtection',
        (isDeviceConnected: number) => {
          dispatch(updateConnectedDeviceState(isDeviceConnected));
        }
      );
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
    if (unsubscribeConnectedToDB) {
      unsubscribeConnectedToDB();
      unsubscribeConnectedToDB = null;
    }

    if (unsubscribeConnectedDeviceToDB) {
      unsubscribeConnectedDeviceToDB();
      unsubscribeConnectedDeviceToDB = null;
    }
    return true;
  }
);
