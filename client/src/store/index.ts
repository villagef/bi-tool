import { Layout } from "react-grid-layout";
import { create } from "zustand";

interface State {
  gridLayouts: Layout[];
  isChartDragging: boolean;
}

interface Action {
  updateGridLayouts: (gridLayout: Layout) => void;
  updateIsChartDragging: (gridLayouts: boolean) => void;
}

export const useStore = create<State & Action>((set) => ({
  gridLayouts: [],
  isChartDragging: false,
  updateGridLayouts: (gridLayout) =>
    set((state) => ({ gridLayouts: [...state.gridLayouts, gridLayout] })),
  updateIsChartDragging: (arg) => set(() => ({ isChartDragging: arg })),
}));
