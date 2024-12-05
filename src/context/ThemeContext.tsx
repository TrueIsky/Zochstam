// src/context/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { themeOne, themeTwo } from "../componenets/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProviderWrapper: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeMode(storedTheme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const theme = themeMode === "light" ? themeOne : themeTwo;

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
