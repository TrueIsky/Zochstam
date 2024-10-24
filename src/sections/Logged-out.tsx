// src/sections/LoggedOut.tsx
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function LoggedOut() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Vitajte hosť, prosím prihláste sa</Typography>
      <Link href="/auth/prihlasenie" passHref>
        <Button variant="contained">Log in</Button>
      </Link>
    </div>
  );
}
