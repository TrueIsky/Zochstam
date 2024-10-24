// project001-filipisky-nextjs/src/app/auth/prihlasenie/page.tsx

"use client";

import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import Typography from '@mui/material/Typography';




export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Možnosti prihlásenia
      </Typography>
      <Button
        variant="contained" color="primary" onClick={() => signIn('google')} >
        Prihlásiť sa s Google
      </Button>
    </div>
  );
}