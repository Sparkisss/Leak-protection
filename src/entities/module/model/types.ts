export type Mode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type CommandStatus =
  | 'idle'
  | 'pending'
  | 'waitingConfirmation'
  | 'confirmed'
  | 'error';

export type UpdateDeviceModePayload = {
  module: string;
  newMode: Mode;
};

export type UpdateDeviceAlarmPayload = {
  module: string;
  status: boolean;
};
export type UpdateRelayByModeyPayload = {
  module: string;
  value: number;
};
export interface DeviceStatusState {
  alarm: boolean;
  mode: Mode;
  relay1_close: boolean;
  relay1_open: boolean;
  relay2_close: boolean;
  relay2_open: boolean;
}

export interface SensorState {
  lake: boolean;
}

export interface DeviceSliceState {
  selectedId: string;
  device: DeviceStatusState | null;
  sensor: SensorState | null;
  error: string | null;
  isConnected: boolean; // флаг подключения
  lastSeen: number;
  commandStatus: CommandStatus;
}
