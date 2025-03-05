import { TextField, Box, Card, CardContent, Typography } from '@mui/material';
import { prisma } from '@/app/api/auth/[...nextauth]/prisma';
import ProfileList from '@/componenets/ProfileList';
import SearchProfiles from '@/componenets/ProfileSearch';

export default async function ProfilesPage() {
  // Initial fetch of all profiles
  const profiles = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      // Add other fields you want to display
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Profily
      </Typography>
      <SearchProfiles profiles={profiles} />
    </Box>
  );
}