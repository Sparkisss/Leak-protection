import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DeviceSliceState, DeviceStatusState, SensorState } from './types';
import {
  updateDeviceMode,
  updateAlarmStatus,
  updateRelayStatus,
} from './deviceThunk';

const initialState: DeviceSliceState = {
  selectedId: 'leakProtection',
  device: null,
  sensor: null,
  error: null,
  isConnected: false,
  lastSeen: 0,
  commandStatus: 'idle',
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    // Подписки пушат сюда данные
    updateDeviceState: (state, action: PayloadAction<DeviceStatusState>) => {
      state.device = action.payload;
    },
    updateSensorState: (state, action: PayloadAction<SensorState>) => {
      state.sensor = action.payload;
    },
    updateConnectedState: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    updateConnectedDeviceState: (state, action: PayloadAction<number>) => {
      state.lastSeen = action.payload;
    },
    setSelectedDevice: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },

    clearDeviceData: state => {
      state.device = null;
      state.sensor = null;
      state.isConnected = false;
    },
  },

  extraReducers: builder => {
    // === Update Device Mode ===
    builder.addCase(updateDeviceMode.pending, (state, action) => {
      if (state.device) {
        // оптимистичное обновление
        state.device.mode = action.meta.arg.newMode;
      }
      state.commandStatus = 'pending';
      state.error = null; // сброс старой ошибки
    });
    builder.addCase(updateDeviceMode.fulfilled, state => {
      state.commandStatus = 'waitingConfirmation';
    });
    builder.addCase(updateDeviceMode.rejected, (state, action) => {
      state.commandStatus = 'error';
      state.error = action.payload as string;
    });

    // === Update Alarm ===
    builder.addCase(updateAlarmStatus.pending, (state, action) => {
      if (state.device) {
        state.device.alarm = action.meta.arg.status;
      }
      state.commandStatus = 'pending';
      state.error = null; // сброс старой ошибки
    });
    builder.addCase(updateAlarmStatus.fulfilled, state => {
      state.commandStatus = 'waitingConfirmation';
    });
    builder.addCase(updateAlarmStatus.rejected, (state, action) => {
      state.commandStatus = 'error';
      state.error = action.payload as string;
    });

    // === Update Relay ===
    builder.addCase(updateRelayStatus.pending, state => {
      state.commandStatus = 'pending';
      state.error = null; // сброс старой ошибки
    });
    builder.addCase(updateRelayStatus.fulfilled, state => {
      state.commandStatus = 'waitingConfirmation';
    });
    builder.addCase(updateRelayStatus.rejected, (state, action) => {
      state.commandStatus = 'error';
      state.error = action.payload as string;
    });

    // Когда реально пришёл апдейт от прибора
    builder.addMatcher(
      action => action.type === updateDeviceState.type,
      (state, action: PayloadAction<DeviceStatusState>) => {
        state.device = action.payload;
        state.commandStatus = 'confirmed';
      }
    );
  },
});

export const {
  updateDeviceState,
  updateSensorState,
  updateConnectedState,
  updateConnectedDeviceState,
  clearDeviceData,
} = deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
