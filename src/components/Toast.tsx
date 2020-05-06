import React from "react";
import { useCurrentToast } from "../providers/toast";

export default function Toast() {
  const { toastMessage, setToastMessage } = useCurrentToast();
  if (toastMessage === "") return null;

  setTimeout(() => setToastMessage(""), 2000);
  return toastMessage === "" ? null : (
    <div style={{ background: "#fcc" }}>{toastMessage}</div>
  );
}
