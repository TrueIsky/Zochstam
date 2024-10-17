// project001-filipisky-nextjs/src/app/auth/odhlasenie/page.tsx

import Typography from '@mui/material/Typography';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export const metadata = { title: `Odhlásenie | Zochstam`};

export default async function LogoutPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>You are not logged in.</p>
        <Link href="/">Go to the home page</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Log out</h1>
      <Link
        href={`/api/auth/signout`}
        style={{ padding: "10px", backgroundColor: "#d32f2f", color: "#fff", borderRadius: "5px", textDecoration: "none" }}
      >
        Log out
      </Link>
    </div>
  );
}
