'use client';

import { useState } from 'react';
import { TextField, Box } from '@mui/material';
import ProfileList from './ProfileList';

interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

interface SearchProfilesProps {
  profiles: Profile[];
}

export default function SearchProfiles({ profiles }: SearchProfilesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = profiles.filter((profile) =>
    profile.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TextField
        fullWidth
        label="Search Profiles"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />
      <ProfileList profiles={filteredProfiles} />
    </>
  );
}