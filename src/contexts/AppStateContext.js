import React, { createContext, useState } from "react";

export const AppStateContext = createContext();

const AppStateContextProvider = props => {
  const [appState, setAppState] = useState({ menuOpen: false });

  return <AppStateContext.Provider value={[appState, setAppState]}>{props.children}</AppStateContext.Provider>;
};

export default AppStateContextProvider;
