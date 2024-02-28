import { create } from 'zustand';
import { IAppSlice, createAppSlice } from './slices';

type AppState = IAppSlice;

export const useAppStore = create<AppState>()((...a) => ({
  ...createAppSlice(...a),
}));
