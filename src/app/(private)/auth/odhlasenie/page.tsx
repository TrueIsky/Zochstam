// project001-filipisky-nextjs/src/app/auth/odhlasenie/page.tsx

"use client";

import { signOut } from 'next-auth/react';
import {
  Box,
  Button,
  Card,
  Typography,
  Link,
} from "@mui/material";


export default function Prihlasenie() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}>
      <Typography variant="h2" gutterBottom>
        Odhlásenie
      </Typography>
      <Button
        variant="contained" color="primary" onClick={() => signOut({ callbackUrl: '/' })} >
        Odhlásiť sa
      </Button>
      </Card>
    </Box>
  );
}
