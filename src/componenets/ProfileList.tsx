'use client'

import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

export default function ProfileList({ profiles }: { profiles: Profile[] }) {
  return (
    <Box sx={{ 
      display: 'grid', 
      gap: 2, 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    }}>
      {profiles.map((profile) => (
        <Card key={profile.id}>
          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box sx={{ position: 'relative', width: 50, height: 50 }}>
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={profile.name || 'Profile picture'}
                  fill
                  style={{ 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
                  {profile.name?.[0] || '?'}
                </div>
              )}
            </Box>
            <Box>
              <Typography variant="h6">{profile.name || 'No name'}</Typography>
              <Typography color="textSecondary">{profile.email}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}