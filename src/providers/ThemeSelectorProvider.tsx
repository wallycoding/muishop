import { ThemeProvider } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import ThemesEntity from "../domain/entities/ThemesEntity";
import themes from "../constants/themes";

interface ThemeSelectorProps {
  children: React.ReactNode;
}
interface ThemeSelector {
  currentTheme: ThemesEntity;
  setCurrentTheme(theme: ThemesEntity): void;
}

const ThemeSelectorContext = createContext<ThemeSelector | null>(null);
const ThemeSelectorProvider = (props: ThemeSelectorProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemesEntity>(ThemesEntity.Dark);
  return (
    <ThemeSelectorContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      <ThemeProvider theme={themes[currentTheme]}>
        {props.children}
      </ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
};

export const useThemeSelector = () => useContext(ThemeSelectorContext)!;

export default ThemeSelectorProvider;
