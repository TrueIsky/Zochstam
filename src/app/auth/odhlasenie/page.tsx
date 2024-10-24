// project001-filipisky-nextjs/src/app/auth/odhlasenie/page.tsx

"use client";

import { signOut } from 'next-auth/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Prihlasenie() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Odhlásiť sa
      </Typography>
      <Button
        variant="contained" color="primary" onClick={() => signOut({ callbackUrl: '/' })} >
        Odhlásiť sa
      </Button>
    </div>
  );
}
