import type { RootState } from '@/app/providers/store/store';

export const getUser = (state: RootState) => state.user;
