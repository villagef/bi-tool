import { Layout } from "react-grid-layout";
import { create } from "zustand";

interface State {
  gridLayouts: Layout[];
}

interface Action {
  updateGridLayouts: (gridLayouts: State["gridLayouts"]) => void;
}

export const useStore = create<State & Action>((set) => ({
  gridLayouts: null,
  updateGridLayouts: (gridLayouts) => set(() => ({ gridLayouts: gridLayouts })),
}));
