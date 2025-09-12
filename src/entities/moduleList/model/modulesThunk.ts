import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ModuleList } from './types';
import { getModuleList } from '../lib/moduleListApi';

export const fetchModuleList = createAsyncThunk<
  ModuleList[],
  void,
  { rejectValue: string }
>('moduleList/fetch', async (_, { rejectWithValue }) => {
  try {
    const data = await getModuleList();
    return data;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : 'Failed to fetch module list'
    );
  }
});
