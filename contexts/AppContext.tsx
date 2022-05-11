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
    if (localStorage.getItem("APP_STATE")) {
      try {
        const storedState = JSON.parse(localStorage.getItem("APP_STATE"));
        dispatch({
          type: "INIT_STORED",
          value: storedState,
        });
      } catch (e) {
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
