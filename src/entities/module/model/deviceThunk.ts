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
import { subscriptionManager } from './subscriptionManager';

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
  (deviceId: string, { dispatch }) => {
    // device
    if (!subscriptionManager.get(`${deviceId}:device`)) {
      const unsub = subscribeToDevice(
        deviceId,
        (data: DeviceStatusState | null) => {
          if (data) dispatch(updateDeviceState(data));
          else dispatch(clearDeviceData());
        }
      );
      subscriptionManager.set(`${deviceId}:device`, unsub);
    }

    // sensor
    if (!subscriptionManager.get(`${deviceId}:sensor`)) {
      const unsub = subscribeToSensor(deviceId, (data: SensorState | null) => {
        if (data) dispatch(updateSensorState(data));
        else dispatch(clearDeviceData());
      });
      subscriptionManager.set(`${deviceId}:sensor`, unsub);
    }

    // DB connection
    if (!subscriptionManager.get(`${deviceId}:connectedToDB`)) {
      const unsub = subscribeToDB((isConnected: boolean) => {
        dispatch(updateConnectedState(isConnected));
      });
      subscriptionManager.set(`${deviceId}:connectedToDB`, unsub);
    }

    // Device connection status
    if (!subscriptionManager.get(`${deviceId}:connectedDeviceToDB`)) {
      const unsub = subscribeToDeviceConnectionStatus(
        deviceId,
        (isDeviceConnected: number) => {
          dispatch(updateConnectedDeviceState(isDeviceConnected));
        }
      );
      subscriptionManager.set(`${deviceId}:connectedDeviceToDB`, unsub);
    }

    return true;
  }
);

export const stopDeviceListeners = createAsyncThunk(
  'device/stopListeners',
  (deviceId: string) => {
    subscriptionManager.clearAllForDevice(deviceId);
    return true;
  }
);
