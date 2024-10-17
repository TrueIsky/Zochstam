import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Icon for logout
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function NavBar() {
  // Fetch the session server-side
  const session = await getServerSession(authOptions);

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          component={Link}
          href="/"
        />

        {session ? (
          // Display options for logged-in users
          <>
            <BottomNavigationAction
              label="Profil"
              icon={<AccountCircleIcon />}
              component={Link}
              href="/profil"
            />
            <BottomNavigationAction
              label="Príspevok"
              icon={<PostAddIcon />}
              component={Link}
              href="/prispevok"
            />
            <BottomNavigationAction
              label="Odhlásiť"
              icon={<ExitToAppIcon />}
              component={Link}
              href="/auth/odhlasenie"
            />
          </>
        ) : (
          // Display options for logged-out users
          <>
            <BottomNavigationAction
              label="Prihlásenie"
              icon={<LockOpenIcon />}
              component={Link}
              href="/auth/prihlasenie"
            />
            <BottomNavigationAction
              label="Registrácia"
              icon={<PersonAddIcon />}
              component={Link}
              href="/auth/registracia"
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
