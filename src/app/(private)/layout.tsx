import { ReactNode } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { AuthGuard } from "@/componenets/AuthGuard"


export default function PrivateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <section>
        <AuthGuard>
          {children}
        </AuthGuard>
      </section>
  );
}   

