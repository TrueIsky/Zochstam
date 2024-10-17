// project001-filipisky-nextjs/src/app/auth/prihlasenie/page.tsx

import Typography from '@mui/material/Typography';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export const metadata = { title: `Prihlásenie | Zochstam`};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>You are already logged in.</p>
        <Link href="/">Go to the home page</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Log in</h1>
      <Link
        href={`/api/auth/prihlasenie`}
        style={{ padding: "10px", backgroundColor: "#0070f3", color: "#fff", borderRadius: "5px", textDecoration: "none" }}
      >
        Log in with Google
      </Link>
    </div>
  );
}