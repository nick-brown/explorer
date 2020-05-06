import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface IValue {
  toastMessage: string;
  setToastMessage: Dispatch<SetStateAction<string>>;
}
type Context = IValue | undefined;
type ToastProviderProps = { children: ReactNode };

export const ToastContext = createContext<Context>(undefined);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastMessage, setToastMessage] = useState<string>("");
  const state = {
    toastMessage: toastMessage,
    setToastMessage: setToastMessage,
  };

  return (
    <ToastContext.Provider value={state}>{children}</ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(`useToast must be used within a ToastProvider`);
  }
  return context;
}
