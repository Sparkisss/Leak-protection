import type { AppDispatch } from '@/app/providers/store/store';
import { setSelectedDevice } from '@/entities/module/model/deviceSlice';

export const handleModuleClick = (
  dispatch: AppDispatch,
  setActiveId: (id: number) => void,
  id: number,
  name: string
) => {
  setActiveId(id);
  dispatch(setSelectedDevice(name));
};
