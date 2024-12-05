// src/components/theme.ts

import { createTheme } from "@mui/material/styles";

// Define theme 1 (Light Theme)
export const themeOne = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f4f4f4",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

// Define theme 2 (Dark Theme)
export const themeTwo = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#333333",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});
