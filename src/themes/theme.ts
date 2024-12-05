// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const themeOne = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f20707",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default themeOne;
