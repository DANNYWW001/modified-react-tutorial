import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const value1 = "John Doe";
  const value2 = 78;
  return (
    <AppContext.Provider value={({ value1, value2 })}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
