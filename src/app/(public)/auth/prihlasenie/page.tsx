// project001-filipisky-nextjs/src/app/auth/prihlasenie/page.tsx

"use client";

import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';




export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Možnosti prihlásenia
        </Typography>
        <Typography variant='h4' gutterBottom>
          Nemáte účet?
        </Typography>
        <Button
          variant="contained" color="primary" onClick={() => signIn('google')} >
          Prihlásiť sa s Google
        </Button>
      </Box>

    </div>
  );
}