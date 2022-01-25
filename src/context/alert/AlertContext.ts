import { AlertColor } from "@mui/material";
import { createContext } from "react";

export interface Alert {
  msg: string | null;
  type: AlertColor | undefined;
}

const initialState = {
  alert: {
    msg: null,
    type: undefined,
  },
  displayAlert: () => {},
  clearAlert: () => {},
};

interface AlertType {
  alert: Alert;
  displayAlert: (msg: string, type: AlertColor, temp?: boolean) => void;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertType>(initialState);

export default AlertContext;
