'use server';

import { prisma } from '@/app/api/auth/[...nextauth]/prisma';

export async function searchProfiles(query: string) {
  const profiles = await prisma.user.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });
  
  return profiles;
}