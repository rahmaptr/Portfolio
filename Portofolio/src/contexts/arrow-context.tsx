import { createContext, Dispatch, SetStateAction } from "react";

export const ArrowContext = createContext<{
  showUpArrow: boolean;
  setShowUpArrow: Dispatch<SetStateAction<boolean>>;
}>({
  showUpArrow: false,
  setShowUpArrow: () => {},
});
