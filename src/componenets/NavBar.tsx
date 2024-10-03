// project001-filipisky-nextjs/src/componenets/NavBar.tsx

"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/'); 
        break;
      case 1:
        router.push('/profil');
        break;
      case 2:
        router.push('/prispevok'); 
        break;
      case 3:
        router.push('/auth/prihlasenie');
        break;
      case 4:
        router.push('/auth/registracia'); 
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevok" icon={<PostAddIcon />} />
        <BottomNavigationAction label="Prihlásenie" icon={<LockOpenIcon />} />
        <BottomNavigationAction label="Registrácia" icon={<PersonAddIcon />} />
      </BottomNavigation>
    </Box>
  );
}
