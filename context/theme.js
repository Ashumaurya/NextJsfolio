import { createContext, useContext, useState } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

export const DarkMode = createContext();

export const useDarkMode = () => {
  return useContext(DarkMode);
};

const ThemeChanger = ({ children }) => {
  const [isDarkMode, setIsDark] = useState(false);

  let theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const value = {
    isDarkMode,
    setIsDark,
  };
  theme = responsiveFontSizes(theme);
  return (
    <DarkMode.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkMode.Provider>
  );
};

export default ThemeChanger;
