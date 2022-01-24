import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const [alert, setAlert] = useState({
    msg: null,
    type: null,
  });

  // Set Alert
  const displayAlert = (msg, type, temp = false) => {
    setAlert({ msg, type });
    temp &&
      setTimeout(() => {
        clearAlert();
      }, 3000);
  };

  // Clear Alert
  const clearAlert = () => {
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
