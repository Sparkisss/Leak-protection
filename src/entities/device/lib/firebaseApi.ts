import { ref, onValue, set } from 'firebase/database';
import { db } from '@/shared/lib/firebase';
import type { DeviceStatusState, SensorState } from '../model/types';

// write data
export async function setDeviceMode(newMode: number) {
  const modeRef = ref(db, 'commands/set_mode');
  try {
    await set(modeRef, newMode);
  } catch (error) {
    throw new Error('Failed to set device mode: ' + (error as Error).message);
  }
}

export async function setAlarmStatus(newStatus: boolean) {
  const alarmRef = ref(db, 'commands/reset_alarm');
  try {
    await set(alarmRef, newStatus);
  } catch (error) {
    throw new Error('Failed to set alarm status: ' + (error as Error).message);
  }
}

export async function setRelayByMode(value: number) {
  const relayRef = ref(db, 'commands/relay');
  try {
    await set(relayRef, value);
  } catch (error) {
    throw new Error('Failed to set relay: ' + (error as Error).message);
  }
}

// read data
export function subscribeToDevice(
  callback: (data: DeviceStatusState | null) => void
) {
  const deviceRef = ref(db, 'device');
  const unsubscribe = onValue(deviceRef, snapshot => {
    const data = snapshot.val();
    if (data && typeof data === 'object' && 'mode' in data)
      callback(data as DeviceStatusState);
    else callback(null);
  });
  return unsubscribe;
}

export function subscribeToSensor(
  callback: (data: SensorState | null) => void
) {
  const sensorRef = ref(db, 'sensor');
  const unsubscribe = onValue(sensorRef, snapshot => {
    const data = snapshot.val();
    if (data && typeof data === 'object' && 'lake' in data)
      callback(data as SensorState);
    else callback(null);
  });
  return unsubscribe;
}

export function subscribeToDB(callback: (isConnected: boolean) => void) {
  const connectedRef = ref(db, '.info/connected');

  const unsubscribe = onValue(connectedRef, snapshot => {
    callback(!!snapshot.val());
  });

  return unsubscribe;
}

export function subscribeToDeviceConnectionStatus(
  callback: (isDeviceConnected: number) => void
) {
  const connectedRef = ref(db, 'esp8266/status/lastSeen');
  const unsubscribe = onValue(connectedRef, snapshot => {
    const data = snapshot.val();
    if (typeof data === 'number') callback(data);
    else callback(0);
  });

  return unsubscribe;
}
