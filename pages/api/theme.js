import { createContext, useState } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

export const DarkMode = createContext();

const ThemeChanger = ({ children }) => {
  const [isDarkMode, setIsDark] = useState(false);

  let theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  theme = responsiveFontSizes(theme);
  return (
    <DarkMode.Provider value={[isDarkMode, setIsDark]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkMode.Provider>
  );
};

export default ThemeChanger;
