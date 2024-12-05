// src/components/Layout.tsx
"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeOne, themeTwo } from "./theme";
import Navbar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(themeOne);

  // Toggle between themes
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme.palette.mode === "light" ? themeTwo : themeOne));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <html lang="sk">
        <body>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Navbar with theme toggle */}
            <Navbar onToggleTheme={toggleTheme} themeMode={currentTheme.palette.mode} />

            {/* Main content */}
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
