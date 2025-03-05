// project001-filipisky-nextjs/src/app/auth/prihlasenie/page.tsx

"use client";

import { signIn } from 'next-auth/react';
import React from "react";
import {
  Box,
  Button,
  Card,

  Typography,
  Link,
} from "@mui/material";
import { Google as GoogleIcon, GitHub as GitHubIcon } from "@mui/icons-material";





export default function LoginPage() {
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
      }}
    >
        <Typography variant="h4" gutterBottom>
          Možnosti prihlásenia
        </Typography>
        <Typography variant="body2" mb={2}>
          Ešte nemáte účet?{" "}
          <Link href="/auth/registracia" color="primary" underline="hover">
            Registrujte sa
          </Link>
        </Typography>
        <Button
        variant="contained"
        color="secondary"
        startIcon={<GoogleIcon />}
        onClick={() => signIn('google')}
        sx={{ mb: 1, width: "100%" }} // Added styling for full width and margin
      >
        Prihlásiť sa s účtom Google
      </Button>
      
      <Button
        variant="contained"
        color="secondary"
        startIcon={<GitHubIcon />}
        onClick={() => signIn('github')}
        sx={{ width: "100%" }} // Added styling for full width
      >
        Prihlásiť sa s účtom Github
      </Button>
      </Card>
    </Box>
  );
}