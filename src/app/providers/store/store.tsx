import { deviceReducer } from '@/entities/module/model/deviceSlice';
import { moduleListReducer } from '@/entities/moduleList/model/moduleSlice';
import { userReducer } from '@/entities/user/model/userSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
    moduleList: moduleListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
