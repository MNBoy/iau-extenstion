import { IProfile } from '@interfaces/.';
import { StateCreator } from 'zustand';

export interface IAppSlice {
  profile: IProfile | null;
  setProfile: (profile: IProfile | null) => void;

  page: string;
  setPage: (page: string) => void;
}

export const createAppSlice: StateCreator<IAppSlice> = (set) => ({
  profile: null,
  setProfile: (profile: IProfile | null) => {
    set({ profile });
  },

  page: 'home',
  setPage: (page: string) => {
    set({ page });
  },
});
