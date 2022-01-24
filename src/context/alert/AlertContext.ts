import { createContext } from "react";

export interface Alert {
  msg: string | null;
  type: string | null;
}

interface AlertType {
  alert: Alert;
  displayAlert: (msg: string, type: string, temp?: boolean) => void;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertType | null>(null);

export default AlertContext;
