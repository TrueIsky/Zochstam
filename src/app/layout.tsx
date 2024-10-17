// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componenets/NavBar";
import AuthProvider from "../componenets/AuthProvider";

export const metadata: Metadata = {
  title: "Zochstam",
  description: "Created by Filip Išky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> 
        </AuthProvider>
      </body>
    </html>
  );
}