import { create } from "zustand";

type TUseAnimation = {
  animationEnd: boolean;
  setAnimationEnd: (animation: boolean) => void;
  animationExit: boolean;
  setAnimationExit: (animation: boolean) => void;
};

export const useIntro = create<TUseAnimation>((set) => ({
  animationEnd: false,
  setAnimationEnd: (newState) => set({ animationEnd: newState }),
  animationExit: false,
  setAnimationExit: (newState) => set({ animationExit: newState }),
}));
