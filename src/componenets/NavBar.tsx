// src/components/Navbar.tsx

"use client";

import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import AppsIcon from "@mui/icons-material/Apps";
import { WbSunny, DarkMode } from "@mui/icons-material"; // Icons for theme toggle
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "@/context/ThemeContext"; // Use ThemeContext

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const { data: session, status } = useSession();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme(); // Use theme context

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const commonPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
  ];

  const authenticatedPaths = [
    { label: "Príspevky", value: "/prispevok", icon: <AppsIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  const guestPaths = [
    { label: "GDPR", value: "/gdpr", icon: <AddCircleIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  const navigationPaths = status === "authenticated" ? [...commonPaths, ...authenticatedPaths] : [...commonPaths, ...guestPaths];

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation value={value} onChange={handleNavigation} showLabels>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
          />
        ))}
      </BottomNavigation>
      {/* Theme toggle button in the navbar */}
      <Box sx={{ position: "fixed", top: 10, right: 10 }}>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme === "light" ? <DarkMode /> : <WbSunny />}
        </IconButton>
      </Box>
    </Box>
  );
}
