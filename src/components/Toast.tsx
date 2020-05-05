import React from "react";
import { ToastContext } from "../providers/toast";

type ToastProps = {
  children: React.ReactNode;
};

// TODO: should probably be "withToast" HOC
function Toast({ children }: ToastProps) {
  const { toastMessage, setToastMessage } = React.useContext(ToastContext);
  return <div>{toastMessage}</div>;
}

export default Toast;
