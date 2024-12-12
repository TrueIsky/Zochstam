"use client";

import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: blue[500],
        },
        secondary: {
          main: red[500],
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: blue[500],
        },
        secondary: {
          main: red[500],
        },
      },
    },
  },
});

export default theme;