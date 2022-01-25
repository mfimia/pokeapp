import { AlertColor } from "@mui/material";
import { useState } from "react";
import { IproviderProps } from "../../utils/IproviderProps";
import AlertContext from "./AlertContext";
import { Alert } from "./AlertContext";

const AlertState = (props: IproviderProps) => {
  const [alert, setAlert] = useState<Alert>({
    msg: null,
    type: undefined,
  });

  // Set Alert
  const displayAlert = (
    msg: string,
    type: AlertColor,
    temp: boolean = false
  ): void => {
    setAlert({ msg, type });
    temp &&
      setTimeout(() => {
        clearAlert();
      }, 3000);
  };

  // Clear Alert
  const clearAlert = (): void => {
    setAlert({ msg: null, type: undefined });
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        displayAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
