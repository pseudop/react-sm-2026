import { useContext } from "react";
import { UserContext } from "../state/UserContext";

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within an AppProvider");
  }
  return context;
}
