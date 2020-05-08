import React, { useState, useContext } from "react";

type ToastProviderProps = { children: React.ReactNode };
type State = string | undefined;
type Dispatch = (str: string) => void;

const StateContext = React.createContext<State>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

export function ToastProvider({ children }: ToastProviderProps) {
  const [state, dispatch] = useState<State>(undefined);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function makeUseContext<T>(ctx: React.Context<T>, ctxName: string) {
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(ctx);
    if (!context) {
      throw new Error(
        `${ctxName} must be used within the appropriate Provider`
      );
    }
    return context;
  };
}

export const useToastMessage = makeUseContext(StateContext, "useToastMessage");
export const useToastDispatch = makeUseContext(
  DispatchContext,
  "useToastDispatch"
);
