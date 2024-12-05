// src/app/layout.tsx
"use client";

import { Metadata } from "next";
import Navbar from "../componenets/NavBar";
import { SessionProvider } from "next-auth/react";
import { ThemeProviderWrapper } from "@/context/ThemeContext";  // Import Theme Context

// export const metadata: Metadata = {
//   title: "Zochstam",
//   description: "Created by Filip Išky",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
      <SessionProvider>
        <ThemeProviderWrapper> {<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar /> {/* Navbar will have access to theme toggle */}
            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>}
        </ThemeProviderWrapper>
      </SessionProvider>
      </body>
    </html>
  );
}
