// src/sections/LoggedOut.tsx
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import PostList from "@/componenets/HomePageData";

export default function LoggedOut() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Vitajte hosť</Typography>
      <div style={{ marginTop: "30px" }}>
        <PostList />
      </div>
      <Typography variant="h5">Prosím prihláste sa, aby ste si mohli užiť zvyšok našej stránky</Typography>
      <Link href="/auth/prihlasenie" passHref>
        <Button variant="contained">Log in</Button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
    
  );
}
