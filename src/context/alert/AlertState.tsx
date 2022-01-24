import { ReactChild, useState } from "react";
import AlertContext from "./AlertContext";
import { Alert } from "./AlertContext";

const AlertState = (props: { children: ReactChild }) => {
  const [alert, setAlert] = useState<Alert>({
    msg: null,
    type: null,
  });

  // Set Alert
  const displayAlert = (
    msg: string,
    type: string,
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
    setAlert({ msg: null, type: null });
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
