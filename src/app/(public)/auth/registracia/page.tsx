import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import { Google as GoogleIcon, GitHub as GitHubIcon } from "@mui/icons-material";

export default function singUp() {
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
          control={<Checkbox />}
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
        >
          REGISTROVAŤ SA ÚČTOM GOOGLE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GitHubIcon />}
          sx={{ width: "100%" }}
        >
          REGISTROVAŤ SA ÚČTOM GITHUB
        </Button>
      </Card>
    </Box>
  );
}
