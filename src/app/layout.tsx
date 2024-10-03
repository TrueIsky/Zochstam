import type { Metadata } from "next";
import "./globals.css";
import NavBar from '../componenets/NavBar';  

export const metadata: Metadata = {
  title: "SnapZoska",
  description: "Made by yours truly, Filip Išky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <div>
          {children}
          <NavBar /> {/* This will add the bottom navigation to all pages */}
        </div>
      </body>
    </html>
  );
}
