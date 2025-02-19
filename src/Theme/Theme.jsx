import { createContext, useContext, useState } from "react";

const ChangeTheme = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ChangeTheme);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ChangeTheme.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ChangeTheme.Provider>
  );
};
