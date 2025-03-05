"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import { Google as GoogleIcon, GitHub as GitHubIcon } from "@mui/icons-material";

// Wrapper function for signIn
const authenticateUser = async (provider: string) => {
  console.log(`Attempting to authenticate with ${provider}...`);

  try {
    await signIn(provider);
  } catch (error) {
    console.error(`Authentication with ${provider} failed:`, error);
  }
};

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleAuthClick = (provider: string) => {
    if (!isChecked) {
      const userConfirmed = window.confirm(
        "Prosím, súhlaste s GDPR a podmienkami používania."
      );
      if (userConfirmed) {
        // Automatically check the box if the user clicks "OK" on the alert
        setIsChecked(true);
        authenticateUser(provider); // Proceed with authentication
      }
      return;
    }
    authenticateUser(provider); // Proceed with authentication if already checked
  };

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
        <Typography variant="h5" gutterBottom>
          Registrácia
        </Typography>
        <Typography variant="body2" mb={2}>
          Už máte účet?{" "}
          <Link href="/auth/prihlasenie" color="primary" underline="hover">
            Prihláste sa
          </Link>
        </Typography>

        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          label={
            <>
              Súhlasím s{" "}
              <Link href="/gdpr" color="primary" underline="hover">
                GDPR
              </Link>{" "}
              a{" "}
              <Link href="/podmienky" color="primary" underline="hover">
                podmienkami používania
              </Link>
              .
            </>
          }
          sx={{ justifyContent: "center", mb: 2 }}
        />

        <Button
          variant="contained"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ mb: 1, width: "100%" }}
          onClick={() => handleAuthClick("google")}
        >
          REGISTROVAŤ SA ÚČTOM GOOGLE
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<GitHubIcon />}
          sx={{ width: "100%" }}
          onClick={() => handleAuthClick("github")}
        >
          REGISTROVAŤ SA ÚČTOM GITHUB
        </Button>
      </Card>
    </Box>
  );
}
