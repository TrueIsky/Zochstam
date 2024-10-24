// src/componenets/NavBar.tsx

"use client";

import { useSession } from "next-auth/react"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar'; // Import Avatar for profile picture

// Define a type for navigation items
interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  key: string; 
}

// Function to create BottomNavigationAction components
const createNavAction = (item: NavItem) => (
  <BottomNavigationAction
    key={item.key}
    label={item.label}
    icon={item.icon}
    component={Link}
    href={item.href}
  />
);

export default function NavBar() {
  const { data: session } = useSession(); 
  const [value, setValue] = React.useState(0);

  const LoggedOutItems: NavItem[] = [
    { label: "Domov", icon: <HomeIcon />, href: "/", key: "home" },
    { label: "Prispevky", icon: <PostAddIcon />, href: "/prispevok", key: "posts" },
    { label: "Prihlásenie", icon: <LoginIcon />, href: "/auth/prihlasenie", key: "sign-in" },
    { label: "Registrácia", icon: <AppRegistrationIcon />, href: "/auth/registracia", key: "register" },
  ];

  const LoggedInItems: NavItem[] = [
    { label: "Domov", icon: <HomeIcon />, href: "/", key: "home" },
    { label: "Prispevky", icon: <PostAddIcon />, href: "/prispevok", key: "posts" },
    {
      label: "Profil",
      icon: (
        <Avatar
          alt={session?.user?.name || "User"}
          src={session?.user?.image || "/default-avatar.png"}
        />
      ),
      href: "/profil",
      key: "profile",
    },
    { label: "Odhlásiť sa", icon: <LoginIcon />, href: "/auth/odhlasenie", key: "sign-out" },
  ];

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Render non-authenticated or authenticated nav items based on session */}
        {(session ? LoggedInItems : LoggedOutItems).map(createNavAction)}
      </BottomNavigation>
    </Box>
  );
}