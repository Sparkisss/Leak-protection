import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModuleListState, ModuleList } from './types';
import { fetchModuleList } from './modulesThunk';

const initialState: ModuleListState = {
  items: [],
  isLoading: false,
  error: null,
};

export const moduleSlice = createSlice({
  name: 'moduleList',
  initialState,
  reducers: {
    clearModuleList: state => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchModuleList.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchModuleList.fulfilled,
      (state, action: PayloadAction<ModuleList[]>) => {
        state.isLoading = false;
        if (action.payload) {
          state.items = action.payload;
        }
      }
    );
    builder.addCase(fetchModuleList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? 'Unknown error';
    });
  },
});

export const { clearModuleList } = moduleSlice.actions;
export const moduleListReducer = moduleSlice.reducer;
