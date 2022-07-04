import {
  useEffect,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext({ state: initialState, dispatch: null });

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("CAREY_APP_STATE")) {
      try {
        const storedState = JSON.parse(localStorage.getItem("CAREY_APP_STATE"));
        dispatch({
          type: "INIT_STORE",
          value: storedState,
        });
      } catch (e) {
        dispatch({
          type: "RESET_STORE",
        });
        console.log("Unable to parse stored state");
      }
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("APP_STATE", JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
