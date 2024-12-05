import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {themeOne, themeTwo} from "../../componenets/theme";
import { AuthGuard } from "@/componenets/AuthGuard"


export default function PrivateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
    <ThemeProvider theme={themeOne}>
      <section>
        <AuthGuard>
          {children}
        </AuthGuard>
      </section>
    </ThemeProvider>
  );
}
