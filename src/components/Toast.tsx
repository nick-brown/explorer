import React from "react";
import { useToast } from "../providers/toast";

export default function Toast() {
  const { toastMessage, setToastMessage } = useToast();
  if (toastMessage === "") return null;

  setTimeout(() => setToastMessage(""), 2000);
  return toastMessage === "" ? null : (
      <div
        className={`toast fade ${toastMessage === "" ? "hide" : "show"}`}
        role="alert"
        style={{
          position: "absolute",
          top: "1em",
          right: "2em",
          zIndex: 1,
          maxWidth: "350px",
          minWidth: "230px",
          padding: ".75rem",
        }}
      >
        {toastMessage}
      </div>
  );
}
