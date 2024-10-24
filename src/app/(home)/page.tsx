// project001-filipisky-nextjs/src/app/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"; // path to your NextAuth options
import LoggedIn from "@/sections/LoggedIn";
import LoggedOut from "@/sections/Logged-out";

export const metadata = { title: `Home | Zochstam`};

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <LoggedIn session={session} />
      ) : (
        <LoggedOut />
      )}
    </>
  );
}


