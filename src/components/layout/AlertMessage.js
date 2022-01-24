import { Fragment, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { Alert } from "@mui/material";

const AlertMessage = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  const { type, msg } = alert;

  return (
    <Fragment>{msg !== null && <Alert severity={type}>{msg}</Alert>}</Fragment>
  );
};

export default AlertMessage;
