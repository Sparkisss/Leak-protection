export type Mode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type CommandStatus =
  | 'idle'
  | 'pending'
  | 'waitingConfirmation'
  | 'confirmed'
  | 'error';

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
  device: DeviceStatusState | null;
  sensor: SensorState | null;
  error: string | null;
  isConnected: boolean; // флаг подключения
  lastSeen: number;
  commandStatus: CommandStatus;
}
