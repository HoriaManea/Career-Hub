import { useContext } from "react";
import { ModalContext } from "../contexts/ShowModalContext";

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a ShowModalProvider");
  }
  return context;
}
