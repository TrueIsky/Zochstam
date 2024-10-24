// src/sections/LoggedIn.tsx
import Typography from "@mui/material/Typography";
import { Session } from "next-auth";

export default function LoggedIn({ session }: { session: Session }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Vitajte, {session?.user?.name || "užívateľ"}!</Typography>
    </div>
  );
}
